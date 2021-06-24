"use-strict";

const { Game } = require("../models")

const getLimit = (limitParam) => {
  if (limitParam === null)
    return 4
  if (limitParam !== null && limitParam > 0 && limitParam < 8)
    return limitParam
  return 8;
}

const getAll = (req, res) => {
  let count = req && req.query && parseInt(req.query.count) || 5;
  let offset = req && req.query && parseInt(req.query.offset) || 0;

  Game.find().skip(offset).limit(count).exec((err, games) => {
    if (err)
      res.status(500).send({ error: err });
    res.status(200).json(games);
  });
};

module.exports = {
  getAll
};

