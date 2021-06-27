const { Coffee } = require("../models");
const { Types } = require("mongoose");

const updateCoffee = (coffee, res) => {
  coffee.save()
    .then(updatedCoffee => {
      res.status(204).send();
    })
    .catch(err => {
      res.status(500).send({ error: err });
    });
}

const add = (req, res) => {
  const { coffeeId } = req.params;
  const { name, review } = req.body;
  const _id = Types.ObjectId();
  Coffee.findById(coffeeId)
    .exec()
    .then(coffee => {
      coffee.reviews = [...coffee.reviews, {
        name, review, date: new Date(), _id
      }];
      return coffee.save();
    })
    .then(savedCoffee => {
      res.status(201).send(savedCoffee.reviews.id(_id));
    })
    .catch(err => {
      res.status(500).send({ error: err });
    });
};

const findAll = (req, res) => {
  const { coffeeId } = req.params;
  Coffee.findById(coffeeId)
    .select("reviews")
    .exec()
    .then(coffee => {
      res.status(200).send(coffee.reviews);
    })
    .catch(err => {
      res.status(500).send({ error: err });
    });
}

const findById = (req, res) => {
  const { coffeeId, reviewId } = req.params;
  Coffee.findById(coffeeId)
    .select("reviews")
    .exec()
    .then(coffee => {
      if (!coffee)
        res.status(404).send({ error: `Can not find coffee with id ${id}` });
      else {
        const review = coffee.reviews.id(reviewId);
        if (review)
          res.status(200).send(review);
        else
          res.status(404).send({ error: `Can not find coffee with id ${reviewId}` });
      }
    })
    .catch(err => {
      res.status(500).send({ error: err });
    });
}

const removeById = (req, res) => {
  const { coffeeId, reviewId } = req.params;
  Coffee.findById(coffeeId)
    .select("reviews")
    .exec()
    .then(coffee => {
      if (!coffee)
        res.status(404).send({ error: `Can not find coffee with id ${id}` });
      else {
        const review = coffee.reviews.id(reviewId);

        if (review) {
          coffee.reviews = coffee.reviews.filter(item => item._id != review._id);
          updateCoffee(coffee, res);
        }
        else
          res.status(404).send({ error: `Can not find review with id ${reviewId}` });
      }
    })
    .catch(err => {
      res.status(500).send({ error: err });
    });
}

const updateById = (req, res) => {
  const { coffeeId, reviewId } = req.params;
  const { name, review } = req.body;
  Coffee.findById(coffeeId)
    .exec()
    .then(coffee => {
      if (!coffee)
        res.status(404).send({ error: `Can not find coffee with id ${id}` });
      else {
        const _review = coffee.reviews.id(reviewId);

        if (_review) {
          const otherReviews = coffee.reviews = coffee.reviews.filter(item => item._id != _review._id);
          coffee.reviews = [...otherReviews, { name, review, _id: review._id, date: new Date() }];
          updateCoffee(coffee, res);
        }
        else
          res.status(404).send({ error: `Can not find review with id ${reviewId}` });
      }
    })
    .catch(err => {
      res.status(500).send({ error: err });
    });
};


module.exports = {
  add,
  findAll,
  findById,
  removeById,
  updateById
};