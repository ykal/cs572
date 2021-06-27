"use strict";

const { Types } = require("mongoose");
const { Coffee } = require("../models");


const add = (req, res, next) => {
  const coffeeId = req.params.coffeeId;

  const { sizeCode } = req.body;

  if (!sizeCode)
    res.status(400).send({ error: "sizeCode is required." });

  Coffee.findById(coffeeId)
    .select("sizes")
    .exec()
    .then(coffee => {
      if (!coffee)
        return Promise.reject({ appError: true, status: 404, message: `Coffee with id : ${coffeeId} not found` });
      else {
        coffee.sizes = [
          ...(coffee.sizes || []),
          {
            sizeCode,
            _id: Types.ObjectId()
          }
        ];
        return coffee.save();
      }
    })
    .then(updatedCoffee => {
      res.status(202).send(updatedCoffee.sizes);
    })
    .catch(error => {
      if (error.appError)
        res.status(error.status).send({ error: error.message });
      else
        next(error);
    });
}

const findAll = (req, res, next) => {
  const coffeeId = req.params.coffeeId;

  Coffee.findById(coffeeId)
    .select("sizes")
    .exec()
    .then(coffee => {
      if (!coffee)
        res.status(404).send({ error: `Coffee with id : ${coffeeId} not found` });
      else {
        res.status(200).send(coffee.sizes);
      }
    })
    .catch(error => {
      next(error);
    });
}

module.exports = {
  add,
  findAll
};