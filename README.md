# SwipeSync

SwipeSync now runs from the `frontend/` folder. The old static frontend has been removed from the active project.

## Requirements

- Node.js 20 or newer
- npm

## Set Up After Git Pull

```bash
git pull
npm install
npm run dev
```

Open the local URL shown in the terminal. By default it is:

```text
http://localhost:5173/
```

The root page redirects to `login.html`.

## Useful Commands

```bash
npm run dev
```

Starts the new frontend locally.

```bash
npm run build
```

Builds the new frontend into `frontend/dist/`.

```bash
npm run preview
```

Previews the production build locally.

## Project Structure

- `frontend/` - active frontend pages and shared browser behavior
- `frontend/app.js` - shared navigation and form handling
- `frontend/vite.config.js` - Vite build configuration for all HTML pages
- `client/` - legacy React client kept in the repository, but no longer used by the root run scripts
