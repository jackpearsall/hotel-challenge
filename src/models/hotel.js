const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  rooms: Number,
  exceptions: [{
    date: Number,
    rooms: Number,
  }],
});

const Hotel = mongoose.model('Hotel', HotelSchema);

module.exports = Hotel;
