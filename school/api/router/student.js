"use strict";

const { Router } = require("express");
const { studentController, courseController } = require("../controllers");
const router = Router();

router.get("/", studentController.getAll);
router.post("/", studentController.addStudent);
router.get("/:id", studentController.getById);
router.put("/:id", studentController.fullUpdateStudent);
router.patch("/:id", studentController.patchUpdateStudent);
router.delete("/:id", studentController.deleteById);
router.get("/:id/courses", courseController.getStudentCourses);
router.get("/:id/courses/:courseId", courseController.getStudentCourseById);

module.exports = router;