"use strict";

const { Schema, model } = require("mongoose");

const sizeSchema = new Schema({
  sizeCode: {
    type: String,
    required: true
  }
});

const reviewSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const coffeeShema = new Schema({
  name: {
    type: String,
    required: true
  },
  availablity: {
    type: Boolean,
    default: true
  },
  sizes: [sizeSchema],
  reviews: [reviewSchema]
});

module.exports = model("Coffee", coffeeShema);