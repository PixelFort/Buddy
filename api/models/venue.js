const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: Number,
  image: String,
  deferLink: String,
  fullLink: String,
  avgRating: Number,
  ratingCount: Number,
  lat: Number,
  long: Number,
  icon: String,
  filter_by: [String],
  sportsAvailable: [
    {
      id: String,
      name: String,
      icon: String,
      price: Number,
      courts: [
        {
          id: String,
          name: String,
          number: Number,
        },
      ],
    },
  ],
  location: String,
  address: {
    type: String,
    require: true,
  },
  bookings: [
    {
      courtNumber: {
        type: String,
        require: true,
      },
      date: {
        type: String,
        require: true,
      },
      time: {
        type: String,
        require: true,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      game: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game',
      },
    },
  ],
});

const Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue;
