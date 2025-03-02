//Recibir las solicitudes de routes para la autencticación, cargar los servicios y devolver la respuesta

const path = require("path");
const admin = require("firebase-admin");
const auth = admin.auth();

const renderRegisterPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/views", "register.html"));
};

const renderLoginPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/views", "login.html"));
};

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    await auth.createUser({ email, password });
    res.redirect("/login");
  } catch (error) {
    console.error("Error creating new user:", error);
    res.redirect("/register");
  }
};

const loginUser = async (req, res) => {
  const { idToken } = req.body;
  try {
    await auth.verifyIdToken(idToken);
    res.cookie("token", idToken, { httpOnly: true, secure: false }); // En producción usar secure: true
    res.json({ success: true });
  } catch (error) {
    console.error("Error verifying ID token:", error);
    res.status(401).json({ error: "Invalid token" });
  }
};

const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.redirect("/products");
};

module.exports = {
  renderRegisterPage,
  renderLoginPage,
  registerUser,
  loginUser,
  logoutUser,
};
