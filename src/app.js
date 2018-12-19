const express = require('express');
const User = require('./models/users');
const Hotel = require('./models/hotel');
const Booking = require('./models/booking');

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

app.post('/booking', (req, res) => {
  const booking = new Booking ({
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    user: req.body.userId,
    hotel: req.body.hotelId,
  });
  booking.save()
    .then(() => {
      res.status(201).json(booking.toObject());
    });
});

app.patch('/booking/:id/accept', (req, res) => {
  Booking.findById(req.params.id, (err, booking) => {
    if (err || booking === null) {
      res.status(404).json("Booking not found.")
    } else {
      booking.set({
        accepted: true,
      })
      booking.save()
      .then(() => {
        res.status(200).json(booking.toObject());
      }); 
    }
  });
});

module.exports = app;
