"use-strict";

const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  courseCode: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  numberOfCredits: {
    type: Number,
    required: true
  }
});

const studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gpa: {
    type: Number,
    default: 0
  },
  courses: [courseSchema]
});

module.exports = model('Student', studentSchema);