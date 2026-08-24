const { Signup, Login } = require("../controllers/AuthController");
const User = require("../model/UserModel");
const authMiddleware = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/signup", Signup);

router.post("/login", Login);

router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("username");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports = router;