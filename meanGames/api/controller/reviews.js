const { Game } = require("../models");
const { Types } = require("mongoose");

const addReview = (req, res) => {
  const { id } = req.params;
  const { name, review } = req.body;
  const _id = Types.ObjectId();
  Game.findById(id)
    .exec()
    .then(game => {
      game.reviews = [...game.reviews, {
        name, review, date: new Date(), _id
      }];
      return game.save();
    })
    .then(savedGame => {
      console.log(savedGame);
      res.status(201).send(savedGame.reviews.id(_id));
    })
    .catch(err => {
      res.status(500).send({ error: err });
    });
};

module.exports = {
  addReview
};