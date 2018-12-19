const mongoose = require('mongoose');


const BookingSchema = new mongoose.Schema({
  startDate: Number,
  endDate: Number,
  accepted: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotel',
  },
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
