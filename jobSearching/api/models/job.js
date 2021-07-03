"use strict"

const { Schema, model } = require("mongoose");


const locationSchema = new Schema({
  address: String,
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
})

const jobSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  location: locationSchema,
  description: { type: String },
  experience: {
    type: String
  },
  skills: {
    type: [String]
  },
  postDate: {
    type: Date,
    default: new Date()
  }
});

module.exports = model("Job", jobSchema);