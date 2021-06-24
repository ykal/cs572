"use strict";

const express = require("express");
require("./api/data/db").open();
const path = require("path");
const { apiRouter } = require("./api");
const PORT = 5050;

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", apiRouter);

const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${server.address().port}`);
});
