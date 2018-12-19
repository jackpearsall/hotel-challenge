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
<<<<<<< HEAD
  const booking = new Booking({
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    user: req.body.userId,
=======
  Booking.find({
    startDate: {
      $gte: req.body.startDate,

    },
    endDate: {
      $lte: req.body.endDate,
    },
>>>>>>> cbe58eb24bf29729701378b45a7e47173100735a
    hotel: req.body.hotelId,
  }, (error, bookings) => {

    const roomsBooked = bookings.length;
    Hotel.findById(req.body.hotelId, (error, hotel) => {
      console.log(hotel.rooms, roomsBooked)
      if (hotel.rooms <= roomsBooked) {
        return res.status(400).json({ error: 'Hotel is fully booked.' });
      }
      const booking = new Booking({
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
  });
});

app.patch('/booking/:id/accept', (req, res) => {
  Booking.findById(req.params.id, (err, booking) => {
    if (err || booking === null) {
<<<<<<< HEAD
      res.status(404).json('Booking not found.')
=======
      res.status(404).json('Booking not found.');
>>>>>>> cbe58eb24bf29729701378b45a7e47173100735a
    } else {
      booking.set({
        accepted: true,
      });
      booking.save()
        .then(() => {
          res.status(200).json(booking.toObject());
        });
    }
  });
});

module.exports = app;
