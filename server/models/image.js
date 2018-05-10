const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = new Schema({
    userId: String,
    imageUrl: String,
    caption: String,
    like: Boolean
})

let Image = mongoose.model('Images', imageSchema)
module.exports = Image