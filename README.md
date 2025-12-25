# TutorConnect — Connect Students with Tutors

Full-stack tutoring web application (React frontend, Node/Express backend).

## Repo structure

- `backend/` — Node/Express API and data models
- `frontend/` — React app

## Prerequisites

- Node.js (14+)
- npm or yarn
- MongoDB (local or hosted), or other DB configured in backend

## Quick start

Start the backend:

```bash
cd backend
npm install
# then either
npm start
# or
node index.js
```

Start the frontend:

```bash
cd frontend
npm install
npm start
```

## Environment

The backend expects environment variables for the database connection and port. Create a `.env` in `backend/` and set values used by `configuration/connectDb.js` (for example `MONGO_URI` or similar).

## API routes

Routes are defined in `backend/routes/` (students, tutors, appointments, ratings, subjects, applications).

## Tests

Run frontend tests:

```bash
cd frontend
npm test
```

## License

See the `LICENSE` file in the repository root.
