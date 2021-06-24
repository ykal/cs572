"use-strict";

const MongoClient = require("mongodb").MongoClient;
const DB_NAME = "meanGames";
const DB_URL = `mongodb://localhost:27017/${DB_NAME}`;
let _connection = null;

const open = function () {
  MongoClient.connect(DB_URL, { useUnifiedTopology: true }, function (err, client) {
    if (err) {
      console.log("DB connection failed");
      return;
    }
    _connection = client.db(DB_NAME);
    console.log("DB connection open", _connection);
  });
};

const getCollection = (collectionName) => {
  if (_connection) {
    return _connection.collection(collectionName);
  }
  return null;
}


const get = function () {
  return _connection;
};

module.exports = {
  open: open,
  get: get,
  getCollection
};