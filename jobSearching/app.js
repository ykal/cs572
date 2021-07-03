"use strict"

require("./api/db");
const express = require("express");
const path = require("path");
const apiRouter = require("./api/router");
const PORT = 5050;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", apiRouter);

const server = app.listen(PORT, () => {
  console.log(`App listening on port ${server.address().port}`);
});