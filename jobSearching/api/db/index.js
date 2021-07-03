"use strict"

const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "jobSearching";
mongoose.connect(DB_URL, {
  dbName: DB_NAME,
  autoCreate: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const onConnected = () => console.log("DB connection started");
const onDisconnected = () => console.log("DB connection closed");
const onError = (error) => console.log("DB connection error\n" + error);


mongoose.connection.on("connected", onConnected);
mongoose.connection.on("disconnected", onDisconnected);
mongoose.connection.on("error", onError);
