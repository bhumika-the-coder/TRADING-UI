# TRADING-UI
A full-stack trading dashboard inspired by Zerodha. I built this project to practice React, backend development, authentication, MongoDB, and deployment while working on a real-world style application.

# Disclaimer

This is an independent educational project created for learning
and portfolio purposes.

This project is not affiliated with, sponsored by, or endorsed by
Zerodha / LinkedIn.

All trademarks, logos, and brand names belong to their respective owners.



# Live Demo
Landing & Authentication: https://zerodha-ui-clone-home.vercel.app,
Dashboard: https://zerodha-ui-clone.vercel.app,
Backend: https://zerodha-ui-clone.onrender.com,
# What it includes
User signup and login,
JWT authentication,
Cookie-based authentication,
User profile/details,
Trading dashboard,
Watchlist,
Holdings,
Positions,
Orders,
MongoDB database,
REST APIs,
Responsive UI,

# Frontend
React.js,
JavaScript,
React Router,
Axios,
CSS,

# Backend
Node.js,
Express.js,
MongoDB,
Mongoose,
JWT,
bcrypt,
CORS,
Cookie Parser,

# Deployment

Vercel —> Frontend,
Render —> Backend,
MongoDB Atlas -> Database

# Authentication
The project uses JWT for authentication.

After login, the backend creates an authentication cookie. The dashboard then uses the /me API to get the currently logged-in user's information.

I also configured CORS so that both deployed frontend applications can communicate with the backend.
