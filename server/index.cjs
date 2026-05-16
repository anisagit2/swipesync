const path = require('node:path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const { Storage } = require('@google-cloud/storage');

const PORT = process.env.PORT || 8080;
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID || process.env.GOOGLE_CLOUD_PROJECT;

if (!PROJECT_ID) {
  console.error('ERROR: FIREBASE_PROJECT_ID or GOOGLE_CLOUD_PROJECT environment variable is required.');
  process.exit(1);
}

const BUCKET_NAME = process.env.GCS_BUCKET_NAME || `${PROJECT_ID}-media`;
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',').map(o => o.trim()) 
  : [];

if (!admin.apps.length) {
  admin.initializeApp({
    projectId: PROJECT_ID,
  });
}

const db = admin.firestore();
const storage = new Storage();
const bucket = storage.bucket(BUCKET_NAME);

const app = express();

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || process.env.NODE_ENV !== 'production') {
        callback(null, true);
        return;
      }
      if (ALLOWED_ORIGINS.includes(origin)) {
        callback(null, true);
      } else {
        console.warn(`CORS blocked for origin: ${origin}`);
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);
app.use(express.json({ limit: '2mb' }));

function cleanObject(input = {}) {
  return Object.fromEntries(
    Object.entries(input).filter(([, value]) => value !== undefined && value !== null && value !== '')
  );
}

function firebaseConfig() {
  return cleanObject({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || `${PROJECT_ID}.firebaseapp.com`,
    projectId: process.env.FIREBASE_PROJECT_ID || PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || `${PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  });
}

function userRef(uid) {
  return db.collection('users').doc(uid);
}

function userSettingsRef(uid) {
  return userRef(uid).collection('settings').doc('main');
}

async function requireAuth(req, res, next) {
  try {
    const header = req.get('authorization') || '';
    const match = header.match(/^Bearer\s+(.+)$/i);
    if (!match) {
      res.status(401).json({ error: 'Missing Firebase ID token.' });
      return;
    }

    req.authUser = await admin.auth().verifyIdToken(match[1]);
    next();
  } catch (error) {
    console.error('Auth verification failed', error);
    res.status(401).json({ error: 'Invalid or expired Firebase ID token.' });
  }
}

async function readProfile(uid) {
  const [profileSnap, settingsSnap] = await Promise.all([userRef(uid).get(), userSettingsRef(uid).get()]);
  return {
    profile: profileSnap.exists ? profileSnap.data() : null,
    settings: settingsSnap.exists ? settingsSnap.data() : null,
  };
}

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    service: 'swipesync-backend',
    projectId: PROJECT_ID,
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/config', (req, res) => {
  const config = firebaseConfig();
  res.json({
    firebase: config,
    authEnabled: Boolean(config.apiKey && config.projectId),
  });
});

app.post('/api/auth/session', requireAuth, async (req, res) => {
  const { uid, email, name, picture } = req.authUser;
  const body = req.body || {};
  const now = admin.firestore.FieldValue.serverTimestamp();
  
  const userDoc = await userRef(uid).get();
  
  const profile = cleanObject({
    uid,
    email,
    displayName: body.displayName || name || body.companyName || (email ? email.split('@')[0] : 'SwipeSync User'),
    companyName: body.companyName,
    website: body.website,
    photoURL: picture,
    authProvider: req.authUser.firebase?.sign_in_provider,
    updatedAt: now,
  });

  const updatePayload = { ...profile };
  if (!userDoc.exists) {
    updatePayload.createdAt = now;
  }

  await userRef(uid).set(updatePayload, { merge: true });

  await userSettingsRef(uid).set(
    {
      notifications: {
        directMessages: true,
        matchAlerts: true,
        communityUpdates: false,
      },
      updatedAt: now,
    },
    { merge: true }
  );

  res.json(await readProfile(uid));
});

app.get('/api/me', requireAuth, async (req, res) => {
  const data = await readProfile(req.authUser.uid);
  res.json(data);
});

app.patch('/api/me', requireAuth, async (req, res) => {
  const { displayName, email, photoURL, phone, companyName, website, role, bio } = req.body;

  // Validation (P2-002)
  if (displayName && displayName.length > 100) return res.status(400).json({ error: 'Display name too long' });
  if (email && !/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ error: 'Invalid email format' });
  if (website && website.length > 255) return res.status(400).json({ error: 'Website URL too long' });
  if (role && role.length > 100) return res.status(400).json({ error: 'Role too long' });
  if (bio && bio.length > 500) return res.status(400).json({ error: 'Bio too long' });

  const payload = cleanObject({
    displayName,
    email,
    photoURL,
    phone,
    companyName,
    website,
    role,
    bio,
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  await userRef(req.authUser.uid).set(payload, { merge: true });
  res.json(await readProfile(req.authUser.uid));
});

app.post('/api/me/upload', requireAuth, async (req, res) => {
  try {
    const { fileName, contentType, data } = req.body;
    
    if (!data || !fileName || !contentType) {
      return res.status(400).json({ error: 'Missing file data, name, or type' });
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(contentType)) {
      return res.status(400).json({ error: 'Invalid content type. Allowed: jpeg, png, webp' });
    }

    const buffer = Buffer.from(data, 'base64');
    if (buffer.length > 2 * 1024 * 1024) {
      return res.status(413).json({ error: 'File too large. Max 2MB allowed.' });
    }

    const ext = path.extname(fileName).toLowerCase() || `.${contentType.split('/')[1]}`;
    const safeName = `${req.authUser.uid}-${Date.now()}${ext}`;
    const file = bucket.file(`profiles/${req.authUser.uid}/${safeName}`);

    await file.save(buffer, {
      metadata: { contentType },
      public: true,
    });

    const publicUrl = `https://storage.googleapis.com/${BUCKET_NAME}/${file.name}`;
    
    await userRef(req.authUser.uid).set({
      photoURL: publicUrl,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    res.json({ url: publicUrl });
  } catch (error) {
    console.error('Upload failed', error);
    res.status(500).json({ error: 'Upload failed' });
  }
});

app.patch('/api/settings', requireAuth, async (req, res) => {
  const { notifications, email, phone } = req.body;
  
  if (notifications && (typeof notifications !== 'object' || Array.isArray(notifications))) {
      return res.status(400).json({ error: 'Notifications must be an object' });
  }

  // Deep validation for notifications (P2-002)
  if (notifications) {
      const keys = Object.keys(notifications);
      const allowed = ['directMessages', 'matchAlerts', 'communityUpdates'];
      if (keys.some(k => !allowed.includes(k))) {
          return res.status(400).json({ error: 'Invalid notification key' });
      }
      if (keys.some(k => typeof notifications[k] !== 'boolean')) {
          return res.status(400).json({ error: 'Notification values must be booleans' });
      }
  }

  const payload = cleanObject({
    email,
    phone,
    notifications,
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  await userSettingsRef(req.authUser.uid).set(payload, { merge: true });
  res.json(await readProfile(req.authUser.uid));
});

app.get('/api/projects', requireAuth, async (req, res) => {
  const projectsSnap = await db.collection('projects').limit(25).get();
  const projects = projectsSnap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  res.json({ projects });
});

app.post('/api/projects/:projectId/message', requireAuth, async (req, res) => {
  const projectId = req.params.projectId;
  const { body } = req.body;

  if (!body || body.length > 1000) {
      return res.status(400).json({ error: 'Message body required and must be under 1000 characters' });
  }

  const message = {
    projectId,
    uid: req.authUser.uid,
    body,
    status: 'queued',
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  };

  const ref = await db.collection('messages').add(message);
  res.status(201).json({ id: ref.id, ...message, createdAt: new Date().toISOString() });
});

app.post('/api/projects/:projectId/invite', requireAuth, async (req, res) => {
  const projectId = req.params.projectId;
  const { recipient, note } = req.body;

  if (note && note.length > 500) {
      return res.status(400).json({ error: 'Note too long (max 500 chars)' });
  }
  if (recipient && recipient.length > 100) {
      return res.status(400).json({ error: 'Recipient name too long' });
  }

  const invite = {
    projectId,
    uid: req.authUser.uid,
    recipient: recipient || null,
    note: note || 'Requesting an invite to collaborate.',
    status: 'requested',
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  };

  const ref = await db.collection('invites').add(invite);
  res.status(201).json({ id: ref.id, ...invite, createdAt: new Date().toISOString() });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ error: 'Unexpected server error.' });
});

app.listen(PORT, () => {
  console.log(`SwipeSync API listening on ${PORT}`);
});
