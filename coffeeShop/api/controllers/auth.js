"use strict"

const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const SECRET_KEY = "fasdfasfas";

const generateToken = async (payload) => {
  const token = jwt.sign(payload, SECRET_KEY, {
    expiresIn: "7d"
  });
  return token;
}

const isTokenValid = (token) => {
  const decoded = (jwt.verify(token, SECRET_KEY));
  if (!decoded.exp)
    return false
  if (decoded.exp < (new Date()).getTime)
    return false
  return true;
}

const isAuthenticated = (req) => {
  if (!req || !req.headers || !req.headers.authorization)
    return false;
  try {
    isTokenValid(req.headers.authorization);
    return true;
  } catch (error) {
    return false;
  }
}

const onlyAuthenticated = (req, res, next) => {
  if (isAuthenticated(req))
    next();
  else
    res.status(403).send({ error: "Unauthorized" });
}

const register = async (req, res, next) => {
  const { username, password, name } = req.body;
  const salt = await bcrypt.genSalt(10);
  const encriptedPass = await bcrypt.hash(password, salt);
  User.create({
    username,
    name,
    password: encriptedPass
  })
    .then(user => {
      delete user.password;
      res.status(201).send({
        name: user.name,
        id: user.id
      });
    })
    .catch(error => {
      next(error);
    });
}

const login = (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({
    username
  })
    .exec()
    .then(async user => {
      if (!user) {
        res.status(404).send({ error: "User not found" });
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (isPasswordMatch) {
        const token = await generateToken({
          username,
          name: user.name
        });
        res.status(200).send({
          token
        });
      }
      else
        res.status(403).send({ error: "Incorrect password" });
    });
}

module.exports = {
  register,
  login,
  onlyAuthenticated
}