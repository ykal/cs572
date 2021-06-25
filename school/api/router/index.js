"use-strict";

const { Router } = require("express");
const studentRouter = require("./student");
const router = Router();

router.use("/students", studentRouter);

module.exports = router;