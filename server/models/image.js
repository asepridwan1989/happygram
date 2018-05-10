const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Joke = require('./../lib/joke')

const imageSchema = new Schema({
    userId: String,
    imageUrl: String,
    caption: String,
})

imageSchema.pre('save', function(next) {
    // calling next kicks off the next middleware in parallel
    let image = this;
    Joke.getJoke().then((result) => {
        image.caption = result.value.joke;
        next();  
    })
  });

let Image = mongoose.model('Images', imageSchema)
module.exports = Image