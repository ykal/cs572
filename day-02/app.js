'use strict';

const express = require('express');

const PORT = 5000;

const app = express();

const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${server.address().port}`);
});