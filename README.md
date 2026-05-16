# SwipeSync

SwipeSync is a professional collaboration matching app built for hackathon-style team formation, founder discovery, and project-based networking. It helps users create a profile, discover relevant collaborators, view public profiles, follow people, manage collaboration opportunities, and review activity insights from an analytics dashboard.

The product idea is simple: make finding the right collaborator feel as fast as swiping, but more professional and useful than a normal social feed.

## What You Can Do

- Sign up or log in with a professional profile flow.
- Complete company and skill onboarding.
- Browse recommended collaborators and projects.
- Open another person's public profile.
- Follow people from their public profile.
- Save interest in matches and collaboration opportunities.
- View collaboration workspace pages.
- Review analytics, match signals, activity heatmaps, and collaboration velocity.
- Edit your own profile and settings.

## Demo Flow

For a quick judge or user walkthrough:

1. Open the app.
2. Start at `login.html` or `signup.html`.
3. Complete the onboarding screens.
4. Go to Discovery to browse matches.
5. Open a recommended person's profile and click Follow.
6. Open Collaboration Hub to view active opportunities.
7. Open Smart Analysis to see match insights, heatmap activity, and collaboration velocity.
8. Open Profile and Settings to review account controls.

## Main Pages

- `login.html` - professional login screen.
- `signup.html` - account creation.
- `signup2.html` - company profile setup.
- `signup3.html` - skills onboarding.
- `first.html` - main match discovery experience.
- `second.html` - discovery variant.
- `collab.html` - collaboration hub.
- `smart.html` - smart analysis dashboard.
- `prf.html` - user profile and public profile view.
- `setting.html` - account and notification settings.

## Services And Tech Used

Frontend:

- HTML multi-page app
- Tailwind CSS
- Vite
- Vanilla JavaScript
- Browser `localStorage` for prototype state such as followed profiles and selected matches

Backend:

- Node.js 20
- Express
- Firebase Admin SDK
- Firebase Authentication token verification
- Firestore for users, settings, projects, messages, and invites
- Google Cloud Storage for profile image uploads

Deployment and infrastructure:

- Google Cloud Run for the frontend container
- Google Cloud Run for the backend API container
- Nginx for serving the built frontend and proxying `/api`
- Docker containers for frontend and backend builds
- Firebase project configuration served through `GET /api/config`

## Installing And Running Locally

Requirements:

- Node.js 20 or newer
- npm
- A modern browser
- Firebase/GCP credentials only if you want to run the real backend locally

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

Then open the local URL shown in the terminal. It is usually:

```text
http://localhost:5173/
```

The root page redirects into the app.

You can use most prototype frontend flows with only the frontend running. To use Firebase-backed profile syncing, project APIs, uploads, and authenticated routes, also run the backend.

## Running The Backend Locally

Create a backend environment file:

```bash
cp server/.env.example server/.env
```

Fill in the Firebase and Google Cloud values in `server/.env`, then run:

```bash
npm run dev:api
```

For local backend development, `server/.env` should contain values like:

```text
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_API_KEY=your-api-key
FIREBASE_APP_ID=your-app-id
FIREBASE_MESSAGING_SENDER_ID=your-sender-id
GCS_BUCKET_NAME=your-project-id-media
ALLOWED_ORIGINS=http://localhost:5173
PORT=8080
```

Do not commit `server/.env`. Use `server/.env.example` as the safe template.

The backend exposes:

- `GET /api/health`
- `GET /api/config`
- `POST /api/auth/session`
- `GET /api/me`
- `PATCH /api/me`
- `POST /api/me/upload`
- `PATCH /api/settings`
- `GET /api/projects`
- `POST /api/projects/:projectId/message`
- `POST /api/projects/:projectId/invite`

## Build

Create the production frontend build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Git And Secret Safety

Before committing, check:

```bash
git status --short
git status --ignored --short
```

The repository is configured to ignore:

- `.env` files
- `server/.env`
- Firebase/GCP credential JSON files
- private keys such as `.pem`, `.key`, and `.p12`
- `node_modules/`
- `frontend/dist/`
- local cache and log files

If a real secret appears in `git status`, do not commit it. Unstage it first:

```bash
git restore --staged path/to/secret-file
```

## Notes For Reviewers

- The app is a hackathon prototype with a working Firebase-ready backend and a polished multi-page frontend.
- Some frontend flows use local browser storage for prototype state, such as followed profiles and selected matches.
- Production backend routes require Firebase ID tokens.
- The deployed Cloud Run version should be used for the cleanest visual review.

## Project Structure

```text
swipesync/
  frontend/              Multi-page Vite frontend
  frontend/app.js        Shared browser behavior and app state
  frontend/styles.css    Tailwind source styles
  frontend/dist/         Generated production build
  server/                Express/Firebase backend
  server/index.cjs       API server
  server/.env.example    Backend environment template
  package.json           Root scripts for frontend and backend
```
