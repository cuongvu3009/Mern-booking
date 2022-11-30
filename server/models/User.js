const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default: '',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    bookedRooms: [
      {
        type: new mongoose.Schema(
          {
            room: {
              type: String,
            },
            dates: {
              type: [String],
            },
            paid: {
              type: [String],
            },
          },
          { timestamps: true }
        ),
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model('User', UserSchema);
