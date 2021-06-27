"use strict";
require("./api/db");
const express = require("express");
const PORT = 5050;

const app = express();

const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${server.address().port}`);
})
