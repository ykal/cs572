"use-strict";

const { Schema, model } = require('mongoose');

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

const publisherSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  established: {
    type: Date,
    required: false
  },
  location: {
    type: Object,
    address: String,
    coordinates: {
      type: [Number],
      index: "2dsphere"
    }
  }
});

const gameSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: Number,
  designers: [String],
  players: {
    type: Number,
    min: 1,
    max: 10
  },
  rate: {
    type: Number,
    min: 1,
    max: 5,
    default: 1
  },
  publisher: publisherSchema,
  reviews: [reviewSchema]
});

module.exports = model("Game", gameSchema);