# Run BudgetWise on Windows

## Prerequisites

Install Node.js LTS, MongoDB (local) or MongoDB Atlas, Git, and Visual Studio Code.

## Backend

```cmd
cd budgetwise\backend
copy .env.example .env
notepad .env
npm install
npm start
```

Set at least `MONGO_URI` and `JWT_SECRET`. Email OTP requires `GMAIL_USER` and `GMAIL_APP_PASSWORD`. Google login requires `GOOGLE_CLIENT_ID`. The backend runs at `http://localhost:5000`.

## Frontend

Open a second terminal:

```cmd
cd budgetwise\frontend
copy .env.example .env
notepad .env
npm install
npm start
```

The frontend opens at `http://localhost:3000`.

## Important

Do not commit `.env` files. They may contain database, email, JWT, and Google credentials.
