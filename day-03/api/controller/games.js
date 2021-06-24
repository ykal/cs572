"use-strict";
const { getCollection } = require("../data/db");

const getLimit = (limitParam) => {
  if (limitParam === null)
    return 4
  if (limitParam !== null && limitParam > 0 && limitParam < 8)
    return limitParam
  return 8;
}

const getAll = (req, res) => {
  const collection = getCollection("games");
  if (!collection)
    res.status(500).send({ error: "Database connection error" });
  let limitParam = null;
  if (req.query && req.query.limit)
    limitParam = parseInt(req.query.limit);
  const limit = getLimit(limitParam);
  collection.find({}).limit(limit)
    .toArray((err, docs) => {
      res.status(200).send(docs);
    });
};

module.exports = {
  getAll
};

