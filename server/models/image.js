const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Joke = require('../lib/joke');

const imageSchema = new Schema({
    userId: String,
    imageUrl: String,
    caption: String,
})

imageSchema.pre('save', true, function(next, done) {
    // calling next kicks off the next middleware in parallel
    let image = this
    Joke.getJoke().then((result) => {
        image.caption = result.value.Joke        
        next();
      })
  });

let Image = mongoose.model('Images', imageSchema)
module.exports = Image