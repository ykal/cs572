"use strict";

const { Schema, model } = require("mongoose");

const sizeSchema = new Schema({
  sizeCode: {
    type: String,
    required: true
  }
})

const coffeeShema = new Schema({
  name: {
    type: String,
    required: true
  },
  availablity: {
    type: Boolean,
    default: true
  },
  sizes: [sizeSchema]
});

module.exports = model("Coffee", coffeeShema);