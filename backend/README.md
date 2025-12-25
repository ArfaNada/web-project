# Backend

Node/Express API for the Web Project.

## Requirements

- Node.js (14+)
- npm
- MongoDB (or other DB configured in `configuration/connectDb.js`)

## Install

```bash
cd backend
npm install
```

## Environment

Create a `.env` file in `backend/` and set your database connection and port. Example variables used by the project might include:

```bash
MONGO_URI=mongodb://localhost:27017/web-project
PORT=5000
```

Adjust names to match what `configuration/connectDb.js` expects.

## Run

```bash
cd backend
# start the server
npm start
# or
node index.js
```

For development with auto-reload, use `nodemon` if configured: `npm run dev`.

## API

Routes are defined in `backend/routes/` and include endpoints for students, tutors, appointments, ratings, subjects, and applications.
