"use strict"

const { Job } = require("../models");

const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 10;

const getAll = (req, res, next) => {

  const skip = req.query.offset || DEFAULT_OFFSET;
  const limit = req.query.limit || DEFAULT_LIMIT;

  Job.find().skip(skip).limit(limit).exec()
    .then(jobs => {
      res.status(200).json(jobs);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    });
}

const create = (req, res, next) => {
  const { title, salary, address, coordinates, description, experience, skills, postDate } = req.body;
  Job.create({
    title,
    salary: parseFloat(salary),
    location: {
      address,
      coordinates
    },
    description,
    skills,
    experience,
    postDate: postDate || new Date()
  })
    .then(newJob => {
      console.log(newJob);
      res.status(201).json(newJob);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    });
}

const getOneById = (req, res, next) => {
  const { jobId } = req.params;
  Job.findById(jobId).exec()
    .then(job => {
      if (!job) {
        res.status(404).json({ error: `Can not find job with id : ${jobId}` })
      }
      else {
        res.status(200).send(job);
      }
    });
}


const validateReqBody = (reqBody, errors) => {
  const { title, salary, address, coordinates, description, experience, skills } = reqBody;
  if (!title) errors.push("title is required");
  if (!salary) errors.push("salary is required");
  if (!address) errors.push("address is required");
  if (!coordinates) errors.push("coordinates is required");
  if (!experience) errors.push("experience is required");
  if (!description) errors.push("description is required");
  if (!skills) errors.push("skills is required");
}

const fullUpdateById = (req, res, next) => {
  const errors = [];
  const { jobId } = req.params;

  validateReqBody(req.body, errors);

  if (errors.length) {
    res.status(400).send({ error: errors })
  } else {
    Job.findById(jobId).exec()
      .then(job => {
        if (!job) {
          return Promise.resolve({ error: `Can not find job with id : ${jobId}`, status: 404 })
        }
        else {
          const { title, salary, address, coordinates, description, experience, skills, postDate } = req.body;
          job.title = title;
          job.salary = parseFloat(salary);
          job.experience = experience;
          job.skills = skills;
          job.description = description;
          job.location = {
            address,
            coordinates
          };
          job.postedDate = new Date();
          return job.save();
        }
      })
      .then(updateRes => {
        if (updateRes.error)
          res.status(updateRes.status).send({ error: updateRes.error });
        else
          res.status(204).send()
      });
  }
}

const removeById = (req, res, next) => {
  const { jobId } = req.params;
  Job.findById(jobId).exec()
    .then(job => {
      if (!job) {
        return Promise.resolve({ error: `Can not find job with id : ${jobId}`, status: 404 })
      }
      else {
        return job.remove();
      }
    })
    .then(dbRes => {
      if (dbRes.error) {
        res.status(dbRes.status).send({ error: dbRes.error });
      } else {
        res.status(204).send();
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).send({ error: "Server error" });
    });
}



module.exports = {
  getAll,
  create,
  getOneById,
  removeById,
  fullUpdateById
}