"use strict"

const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  name: String,
  password: {
    type: String,
    required: true
  }
});

module.exports = model("User", userSchema);