const axios = require('axios');
// require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('./users-model.js');
// doesn't require express because only used in server.js

const { authenticate } = require('../auth/authenticate');
const { jwtKey } = require('../auth/authenticate');


module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  // implement user registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
}

function makeTokenFromUser(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  }
  const options = {
    expiresIn: '1h',
  }
  const token = jwt.sign(payload, jwtKey, options);
  return token
}

function login(req, res) {
  // implement user login
  let { username, password } = req.body;

  Users.findBy({ username })
      .first()
      .then(user => {
          if (user && bcrypt.compareSync(password, user.password)) {
              const token = makeTokenFromUser(user);
              res.status(200).json({
                  message: `Welcome ${user.username}!`,
                  token
              });
          } else {
              res.status(401).json({ message: 'Invalid Credentials' });
          }
      })
      .catch(error => {
          res.status(500).json(error);
      });
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
