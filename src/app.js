const express = require('express');
const User = require('./models/users');
const Hotel = require('./models/hotel');

const app = express();
app.use(express.json());

app.post('/user', (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
  });
  user.save()
    .then(() => {
      res.status(201).json(user.toObject());
    });
});

app.post('/hotel', (req, res) => {
  const hotel = new Hotel({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    rooms: req.body.rooms,
  });
  hotel.save()
    .then(() => {
      res.status(201).json(hotel.toObject());
    });
});

module.exports = app;
