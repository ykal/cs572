"use strict";

const express = require("express");
const path = require("path");

const PORT = 5050;

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${server.address().port}`);
});