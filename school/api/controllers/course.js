"use-strict";

const Student = require("../models/student");

const getStudentCourses = (req, res) => {
  const id = req && req.params && req.params.id || null;
  if (!id)
    res.status(400).send({ error: "Invalid id param" });

  Student.findById(id).select("courses").exec((err, student) => {
    if (err)
      res.status(500).send({ error: err });

    if (student)
      res.status(200).send(student.courses);
    else
      res.status(404).send({ error: `Student with id of '${id}' not found.` })
  })
}


module.exports = {
  getStudentCourses,
};