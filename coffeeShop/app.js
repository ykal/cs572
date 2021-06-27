"use strict";

require("./api/db");

const express = require("express");
const apiRouter = require("./api/router");

const PORT = 5050;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", apiRouter);

const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${server.address().port}`);
});
