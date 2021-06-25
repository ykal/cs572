"use-strict";

const { Game } = require("../models");
const game = require("../models/game");

const MAX_DISTANCE = 100000;
const MIN_DISTANCE = 0;

const getAll = (req, res) => {
  let count = req && req.query && parseInt(req.query.count) || 5;
  let offset = req && req.query && parseInt(req.query.offset) || 0;
  let lat = req && req.query && parseFloat(req.query.lat) || null;
  let lng = req && req.query && parseFloat(req.query.lng) || null;
  let query = {};

  if (lat && lng) {
    query["publisher.location"] = {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [lng, lat]
        },
        $maxDistance: MAX_DISTANCE,
        $minDistance: MIN_DISTANCE
      }
    }
  }

  Game.find(query).skip(offset).limit(count).exec((err, games) => {
    if (err)
      res.status(500).send({ error: err });
    res.status(200).json(games);
  });
};

const getById = (req, res) => {
  const id = req && req.params && req.params.id || null;
  if (!id)
    res.status(400).send({ error: "Invalid id param" });

  Game.findById(id, (err, game) => {
    if (err)
      res.status(500).send({ error: err });

    if (game) res.status(200).send(game);
    else res.status(404).send({ error: `Game with id of '${id}' not found.` })
  });
}

const createGame = (req, res) => {
  const { title, rate, price, players } = req.body || {};
  Game.create({
    title,
    rate: parseInt(rate),
    price: parseFloat(price),
    players: parseInt(players)
  }, (err, game) => {
    if (err)
      res.status(500).send({ error: err });
    else
      res.status(201).send(game);
  });
}

const updateGame = (game, updatedData, cb) => {
  game.title = updatedData.title || game.title;
  game.rate = parseInt(updatedData.rate) || game.rate;
  game.price = parseFloat(updatedData.price) || game.price;
  game.players = parseInt(updatedData.players) || game.players;

  game.save((err, game) => cb(err, game));
}

const patchGame = (req, res) => {
  const id = req.params.id;
  const { title, rate, price, players } = req.body;
  Game.findById(id, (err, game) => {
    if (err)
      res.status(500).send({ error: err });
    else {
      updateGame(game, { title, rate, price, players }, (updateErr, updatedGame) => {
        if (err)
          res.status(500).send({ error: updateErr });
        else
          res.status(200).send(updatedGame);
      });
    }
  });
}

const putGame = (req, res) => {
  const id = req.params.id;
  const updatedGame = req.body;

  if (id != updatedGame.id)
    res.status(400).send({ error: "Game id cannot be changed." });
  else {
    Game.findById(id)
      .exec()
      .then(game => {
        game.overwrite(updatedGame);
        return game.save();
      })
      .then(savedGame => {
        res.status(200).send(savedGame);
      })
      .catch(err => {
        res.status(500).send({ error: err });
      });
  }
}

module.exports = {
  getAll,
  getById,
  createGame,
  patchGame,
  putGame
};

