# TRADING-UI

A full-stack trading dashboard built as an independent educational project to practice React, backend development, authentication, MongoDB, and deployment while working on a real-world style application.

# Live Demo

Landing & Authentication: https://trading-ui-fcn9.vercel.app
Dashboard: https://trading-ui-three.vercel.app
Backend: https://trading-ui-ihfp.onrender.com

# What it includes

- User signup and login
- JWT authentication
- Cookie-based authentication
- User profile/details
- Trading dashboard
- Watchlist
- Holdings
- Positions
- Orders
- MongoDB database
- REST APIs
- Responsive UI

# Frontend

- React.js
- JavaScript
- React Router
- Axios
- CSS

# Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- CORS
- Cookie Parser

# Deployment

- Vercel — Frontend
- Render — Backend
- MongoDB Atlas — Database

# Authentication

The project uses JWT for authentication.

After login, the backend creates an authentication cookie. The dashboard then uses the `/me` API to retrieve information about the currently authenticated user.

CORS is configured so that the deployed frontend applications can communicate securely with the backend.
