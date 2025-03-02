const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/register", authController.renderRegisterPage);
router.get("/login", authController.renderLoginPage);
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/logout", authController.logoutUser);

module.exports = router;