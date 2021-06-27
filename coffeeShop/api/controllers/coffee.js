"use strict";

const { Coffee } = require("../models");

const create = (req, res, next) => {
  const { name, availablity } = req.body;
  Coffee.create({
    name,
    availablity
  })
    .then(coffee => {
      res.status(201).send(coffee);
    })
    .catch(error => {
      next(error);
    })
};

const findAll = (req, res, next) => {
  Coffee.find({})
    .exec()
    .then(coffees => {
      res.status(200).send(coffees);
    })
    .catch(error => {
      next(error);
    });
};

module.exports = {
  create,
  findAll
};