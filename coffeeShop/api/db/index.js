"use strict";

const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017";
const DB_OPTIONS = {
  dbName: "coffeeShop",
  autoCreate: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
};

mongoose.connect(DB_URL, DB_OPTIONS);

const onConnected = () => console.log(`${DB_OPTIONS.dbName} database connected on ${DB_URL}`);
const onDisconnected = () => console.log(`Database disconnected`);
const onError = (err) => console.log(`Error while connecting to database\n${err}`);
const closeConnection = (origin, cb) => {
  console.log(`DB connection closed ${origin}`);
  cb && cb();
}

// mongoose connection event listener
mongoose.connection.on("connected", onConnected);
mongoose.connection.on("disconected", onDisconnected);
mongoose.connection.on("error", onError);

// process event listener
process.on("SIGINT", () => {
  closeConnection("SIGINT", () => process.exit(0));
});
process.on("SIGTERM", () => {
  closeConnection("SIGTERM", () => process.exit(0));
});
process.once("SIGUSR2", () => {
  closeConnection("SIGUSR2", () => process.kill(process.pid, "SIGUSR2"));
});
