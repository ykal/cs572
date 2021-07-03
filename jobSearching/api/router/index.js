"use strict"

const { Router } = require("express");
const router = Router();
const jobRouter = require("./job");

router.use("/jobs", jobRouter);

module.exports = router;