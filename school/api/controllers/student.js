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

const getById = (req, res) => {
  const id = req && req.params && req.params.id || null;
  if (!id)
    res.status(400).send({ error: "Invalid id param" });

  Student.findById(id, (err, student) => {
    if (err)
      res.status(500).send({ error: err });

    if (student) res.status(200).send(student);
    else res.status(404).send({ error: `Student with id of '${id}' not found.` })
  });
}

const addStudent = (req, res) => {
  const { name, gpa } = req.body || {};
  Student.create({
    name,
    gpa: parseInt(gpa)
  }, (err, student) => {
    if (err)
      res.status(500).send({ error: err });
    else
      res.status(201).send(student);
  });
}


module.exports = {
  getAll,
  getById,
  addStudent
};