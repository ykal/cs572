"use-strict";

const mongoose = require('mongoose');

const DB_NAME = "SchoolDB";
const DB_URL = `mongodb://localhost:27017/${DB_NAME}`;

const onConnected = () => console.log("Connected to DB.");
const onDisconnected = () => console.log("Disconnected to DB.");
const onError = (err) => console.log(err);
const closeConnection = (origin, cb) => {
  console.log(`DB connection closed ${origin}`);
  cb && cb();
}

mongoose.connect(DB_URL, { useUnifiedTopology: true });

// connection event listener
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
