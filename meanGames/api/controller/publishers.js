const { Game } = require('../models');
const { Types } = require('mongoose');

const addGamePublisher = (req, res) => {
  const { id } = req.params;
  const { name, country, established, location } = req.body;
  Game.findById(id)
    .exec()
    .then(game => {
      game.publisher = {
        name, country, established, location, "_id": Types.ObjectId()
      };
      return game.save();
    })
    .then(savedGame => {
      res.status(200).send(savedGame.publisher);
    })
    .catch(err => {
      res.status(500).send({ error: err });
    });
}

const deleteGamePublisher = (req, res) => {
  const { id } = req.params;
  Game.findById(id)
    .exec()
    .then(game => {
      game.publisher = undefined;
      return game.save();
    })
    .then(() => {
      res.status(204).send();
    })
    .catch(err => {
      res.status(500).send({ error: err });
    });
}

module.exports = {
  addGamePublisher,
  deleteGamePublisher
};