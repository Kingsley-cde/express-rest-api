const express = require("express");
const { userController } = require("../controllers/userController");
const { auth } = require("../middlewares/auth");
const router = express.Router();
router.post("/signup", userController.signupHandler);
router.post("/login", userController.loginHandler);
router.get("/profile", auth, userController.profileHandler);

module.exports = router;
