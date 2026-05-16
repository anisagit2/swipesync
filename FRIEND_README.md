# SwipeSync Friend Handoff

This guide is for someone opening the code tomorrow morning and trying to understand what the app is, how it is wired, and how to run it without guessing.

## The Short Version

SwipeSync is a multi-page web app for matching professionals with collaborators and projects. The frontend is mostly static HTML pages styled with Tailwind, with one shared JavaScript file that adds navigation, local prototype state, Firebase auth, profile editing, following, and backend syncing. The backend is an Express API that connects to Firebase Auth, Firestore, and Google Cloud Storage.

Start here:

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:5173/
```

## Services And Tech Used

Frontend:

- HTML pages in `frontend/`
- Tailwind CSS from `frontend/styles.css`
- Vite for local development and production builds
- Vanilla JavaScript in `frontend/app.js`
- Browser `localStorage` for prototype state
- Nginx in the frontend container

Backend:

- Node.js 20
- Express
- Firebase Admin SDK
- Firebase Authentication ID token verification
- Firestore collections for app data
- Google Cloud Storage for profile image uploads

Cloud/deploy:

- Google Cloud Run frontend service
- Google Cloud Run backend service
- Dockerfile for the frontend: `frontend/Dockerfile.frontend`
- Dockerfile for the backend: `server/Dockerfile.backend`
- Frontend Nginx proxy config: `frontend/nginx.conf`

## Important Folders

```text
frontend/
  app.js                 Shared app behavior for every page
  styles.css             Tailwind CSS source
  vite.config.js         Builds every HTML page in frontend/
  index.html             Redirect entry page
  login.html             Login
  signup.html            Account signup
  signup2.html           Company onboarding
  signup3.html           Skills onboarding
  first.html             Main discovery/matching page
  second.html            Alternate discovery page
  collab.html            Collaboration hub
  smart.html             Analysis dashboard
  prf.html               Own profile and public profile page
  setting.html           Settings page

server/
  index.cjs              Express API
  .env.example           Required backend environment variables
  Dockerfile.backend     Backend Cloud Run container

frontend/Dockerfile.frontend
frontend/nginx.conf      Frontend Cloud Run container
```

## Full Install Guide

Requirements:

- Node.js 20 or newer
- npm
- Browser for testing
- Firebase/GCP project access only if running backend features locally

Install dependencies from the repo root:

```bash
npm install
```

Run the frontend:

```bash
npm run dev
```

Open:

```text
http://localhost:5173/
```

Build the frontend:

```bash
npm run build
```

Preview the built frontend:

```bash
npm run preview
```

Set up the backend environment:

```bash
cp server/.env.example server/.env
```

Fill in `server/.env`:

```text
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_API_KEY=your-api-key
FIREBASE_APP_ID=your-app-id
FIREBASE_MESSAGING_SENDER_ID=your-sender-id
GCS_BUCKET_NAME=your-project-id-media
ALLOWED_ORIGINS=http://localhost:5173
PORT=8080
```

Run the backend:

```bash
npm run dev:api
```

Check backend syntax without starting it:

```bash
node --check server/index.cjs
```

## How The Frontend Works

The frontend is not a React app anymore. It is a Vite app that builds multiple HTML files.

Most page-specific HTML lives directly in each `.html` file. Shared behavior lives in:

```text
frontend/app.js
```

That file handles:

- page navigation
- signup/login prototype flows
- Firebase initialization
- syncing profile data with the backend
- match card rendering
- opening another person's profile
- following a public profile
- profile editing
- settings toggles
- collaboration buttons
- toast messages

The app uses browser `localStorage` for some prototype state, including:

- `swipesync-auth`
- `swipesync-profile-name`
- `swipesync-profile-email`
- `swipesync-profile-image`
- `swipesync-profile-role`
- `swipesync-profile-bio`
- `swipesync-following`
- `swipesync-selected-profile`
- `swipesync-active-project`

This is why some features still appear to work even without the backend running.

## How Public Profiles And Follow Work

On the discovery page, the Profile button opens:

```text
prf.html?person=person-slug
```

The helper functions in `frontend/app.js` convert match names into slugs, find the matching profile, render that person's public profile, hide owner-only edit controls, and show a Follow button.

Following is currently saved in local storage under:

```text
swipesync-following
```

So this part is prototype-local unless you later add a backend follow table or collection.

## How The Backend Works

The backend is:

```text
server/index.cjs
```

It uses:

- Express for the HTTP API
- Firebase Admin for auth token verification and Firestore
- Google Cloud Storage for profile image uploads

The backend requires either:

```text
FIREBASE_PROJECT_ID
```

or:

```text
GOOGLE_CLOUD_PROJECT
```

For local development, create:

```bash
cp server/.env.example server/.env
```

Then fill in:

```text
FIREBASE_PROJECT_ID=
FIREBASE_API_KEY=
FIREBASE_APP_ID=
FIREBASE_MESSAGING_SENDER_ID=
GCS_BUCKET_NAME=
ALLOWED_ORIGINS=
PORT=8080
```

Run the backend:

```bash
npm run dev:api
```

Never commit `server/.env`. It is ignored on purpose. Commit only `server/.env.example`.

## Frontend To Backend Connection

The frontend reads backend Firebase config from:

```text
GET /api/config
```

In production, the frontend can call the backend through the deployed URL or through the frontend proxy depending on Cloud Run setup.

In local development, if the backend is not available, the frontend falls back to prototype behavior for several flows. Authenticated backend calls still need Firebase sign-in.

## Common Commands

Install:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Run backend:

```bash
npm run dev:api
```

Build frontend:

```bash
npm run build
```

Preview built frontend:

```bash
npm run preview
```

Check backend syntax:

```bash
node --check server/index.cjs
```

## Before Pushing

Check what will be committed:

```bash
git status --short
```

This repo currently has a big frontend restructure from the old `client/` folder to the new `frontend/` folder. If that is intentional, `git add .` can be okay, but look carefully for secrets first.

Do not commit:

- `server/.env`
- `.env` or `.env.*`
- Firebase service account JSON files
- Google Cloud credential JSON files
- private API keys outside `.env`
- `.pem`, `.key`, or `.p12` private key files
- `node_modules/`
- `frontend/dist/`
- generated files you do not want in git

Useful check:

```bash
git status --ignored --short
```

If a secret accidentally gets staged:

```bash
git restore --staged path/to/secret-file
```

## Things To Know Before Editing

- Edit shared behavior in `frontend/app.js`.
- Edit the analysis dashboard in `frontend/smart.html`.
- Edit discovery cards in `frontend/first.html` or the match data array in `frontend/app.js`.
- Edit profile UI in `frontend/prf.html`.
- Edit backend API behavior in `server/index.cjs`.
- Do not rely on opening `frontend/*.html` directly with `file://` for final styling checks. Use `npm run dev` or `npm run preview`.

## Known Prototype Edges

- Following another person is stored locally, not in Firestore yet.
- Some recommendation cards are static prototype content.
- Backend project actions need real project ids to send messages or invite requests.
- Profile photo upload depends on the Cloud Storage bucket allowing the selected public URL strategy.

## Suggested Morning Walkthrough

1. Run `npm install`.
2. Run `npm run dev`.
3. Open `http://localhost:5173/`.
4. Walk through login/signup.
5. Open Discovery and test Profile.
6. Follow a person from their public profile.
7. Open Smart Analysis and check the heatmap and velocity chart.
8. Open Profile and Settings.
9. Run `npm run build`.
10. Check `git status --short` before pushing.
