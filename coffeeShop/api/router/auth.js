"use strict"

const { Router } = require("express");
const { authController } = require("../controllers");

const router = Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;