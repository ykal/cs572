"use-strict";

const Student = require("../models/student");

const getAll = (req, res) => {
  let count = req && req.query && parseInt(req.query.count) || 5;
  let offset = req && req.query && parseInt(req.query.offset) || 0;

  Student.find().skip(offset).limit(count).exec((err, students) => {
    if (err)
      res.status(500).send({ error: err });
    res.status(200).json(students);
  });
};

module.exports = {
  getAll
};