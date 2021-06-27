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

const findOneById = (req, res, next) => {
  const coffeeId = req.params.coffeeId;
  Coffee.findById(coffeeId)
    .exec()
    .then(coffee => {
      if (!coffee)
        res.status(404).send({ error: `Coffee with id : ${coffeeId} not found` });
      else
        res.status(200).send(coffee);
    })
    .catch(error => {
      next(error);
    });
};

module.exports = {
  create,
  findAll,
  findOneById
};