const { Game } = require('../models');
const { Types } = require('mongoose');
const { publishersController } = require('.');

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

const patchGamePublisher = (req, res) => {
  const { id } = req.params;
  const { name, country, established, location } = req.body;
  Game.findById(id)
    .exec()
    .then(game => {
      const publisher = game.publisher;
      game.publisher = {
        name: name || publisher.name,
        country: country || publisher.country,
        established: established || publisher.established,
        location: location || publisher.location,
        "_id": publisher._id
      };
      return game.save();
    })
    .then(savedGame => {
      res.status(204).send();
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
  deleteGamePublisher,
  patchGamePublisher
};