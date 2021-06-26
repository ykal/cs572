const { Game } = require("../models");
const { Types } = require("mongoose");

const updateGame = (game, res) => {
  game.save()
    .then(savedGame => {
      res.status(204).send();
    })
    .catch(err => {
      res.status(500).send({ error: err });
    });
}

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
      res.status(201).send(savedGame.reviews.id(_id));
    })
    .catch(err => {
      res.status(500).send({ error: err });
    });
};

const getReviews = (req, res) => {
  const { id } = req.params;
  Game.findById(id)
    .select("reviews")
    .exec()
    .then(game => {
      res.status(200).send(game.reviews);
    })
    .catch(err => {
      res.status(500).send({ error: err });
    });
}

const getReview = (req, res) => {
  const { id, reviewId } = req.params;
  Game.findById(id)
    .select("reviews")
    .exec()
    .then(game => {
      if (!game)
        res.status(404).send({ error: `Can not find game with id ${id}` });
      else {
        const review = game.reviews.id(reviewId);
        if (review)
          res.status(200).send(review);
        else
          res.status(404).send({ error: `Can not find review with id ${reviewId}` });
      }
    })
    .catch(err => {
      res.status(500).send({ error: err });
    });
}

const deleteReview = (req, res) => {
  const { id, reviewId } = req.params;
  Game.findById(id)
    .select("reviews")
    .exec()
    .then(game => {
      if (!game)
        res.status(404).send({ error: `Can not find game with id ${id}` });
      else {
        const review = game.reviews.id(reviewId);

        if (review) {
          console.log("here");
          game.reviews = game.reviews.filter(item => item._id != review._id);
          updateGame(game, res);
        }
        else
          res.status(404).send({ error: `Can not find review with id ${reviewId}` });
      }
    })
    .catch(err => {
      res.status(500).send({ error: err, from: 'main' });
    });
}


module.exports = {
  addReview,
  getReviews,
  getReview,
  deleteReview
};