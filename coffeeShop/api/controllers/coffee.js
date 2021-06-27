"use strict";

const { Coffee } = require("../models");

const addCoffee = (req, res, next) => {
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

module.exports = {
  addCoffee
};