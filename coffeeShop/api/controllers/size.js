"use strict";

const { Types } = require("mongoose");
const { Coffee } = require("../models");


const addSize = (req, res, next) => {
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

module.exports = {
  addSize
};