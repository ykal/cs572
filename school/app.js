"use strict";

require("./api/data/db");
const express = require("express");
const apiRouter = require("./api/router");

const PORT = 5051;


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", apiRouter);

const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${server.address().port}`);
});
