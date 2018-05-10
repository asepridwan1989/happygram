const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const PictureSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
});

/** hooks, give status isHappy: true | false  */

PictureSchema.pre('save', function(next) {
  // let user = this;
  // lib api 
});

const Picture = mongoose.model('Picture', PictureSchema);

module.exports = { Picture };