const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  age: {
    type: String,
  },
  country: {
    type: String,
  },
  city: {
    type: String,
  },
  gander: {
    type: Boolean,
  },
  phone: {
    type: String, // validation using api validation phone number
  },
  email: {
    type: String, //validation email rgularexpretion
  },
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
