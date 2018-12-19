const express = require('express');
const User = require('./models/users');

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

module.exports = app;
