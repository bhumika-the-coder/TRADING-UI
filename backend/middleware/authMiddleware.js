/* const jwt = require("jsonwebtoken");


const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

module.exports = authMiddleware; */


const authMiddleware = (req, res, next) => {
  try {
    console.log("COOKIES:", req.cookies);

    const token = req.cookies.token;

    if (!token) {
      console.log("TOKEN NOT FOUND");
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    console.log("DECODED USER:", decoded);

    req.user = decoded;

    next();
  } catch (err) {
    console.log("JWT ERROR:", err);

    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};