"use strict";

const { Coffee } = require("../models");

const create = (req, res, next) => {
  const { name, availablity, description, imageUrl } = req.body;
  Coffee.create({
    name,
    availablity,
    description,
    imageUrl
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

const updateCoffee = (coffee, res, next) => {
  coffee.save()
    .then(updatedCoffee => {
      res.status(204).send();
    })
    .catch(error => {
      next(error);
    });
};

const updateById = (req, res, next) => {
  const coffeeId = req.params.coffeeId;
  const { name, availablity, description, imageUrl } = req.body;

  if (!name) res.status(400).send({ error: "name is required." });
  if (availablity === null) res.status(400).send({ error: "availablity is required." });
  if (description === null) res.status(400).send({ error: "description is required." });
  if (imageUrl === null) res.status(400).send({ error: "imageUrl is required." });

  Coffee.findById(coffeeId)
    .exec()
    .then(coffee => {
      if (!coffee)
        res.status(404).send({ error: `Coffee with id : ${coffeeId} not found` });
      else {
        coffee.name = name;
        coffee.availablity = availablity;
        coffee.description = description;
        coffee.imageUrl = imageUrl;
        updateCoffee(coffee, res, next);
      }
    })
    .catch(error => {
      next(error);
    });
};

const patchById = (req, res, next) => {
  const coffeeId = req.params.coffeeId;
  const { name, availablity, description, imageUrl } = req.body;

  if (!name && !description && availablity === null && !imageUrl)
    res.status(400).send({ error: "At least one coffee attribute is required." });

  Coffee.findById(coffeeId)
    .exec()
    .then(coffee => {
      if (!coffee)
        res.status(404).send({ error: `Coffee with id : ${coffeeId} not found` });
      else {
        coffee.name = name || coffee.name;
        coffee.imageUrl = imageUrl || coffee.imageUrl;
        coffee.description = description || coffee.description;
        coffee.availablity = availablity !== null ? availablity : coffee.availablity;
        updateCoffee(coffee, res, next);
      }
    })
    .catch(error => {
      next(error);
    });
};

const removeById = (req, res, next) => {
  const coffeeId = req.params.coffeeId;

  Coffee.findByIdAndRemove(coffeeId)
    .exec()
    .then(coffee => {
      if (!coffee)
        res.status(404).send({ error: `Coffee with id : ${coffeeId} not found` });
      else {
        res.status(204).send();
      }
    })
    .catch(error => {
      next(error);
    });
};


module.exports = {
  create,
  findAll,
  findOneById,
  updateById,
  patchById,
  removeById
};