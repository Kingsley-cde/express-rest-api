const express = require("express");
const {
  createToken,
  createPassword,
  verifyPassword,
} = require("../utils/User");

const { UserModel } = require("../models/User");
const router = express.Router();
