const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = new Schema({
    userId: String,
    imageUrl: String,
    caption: String,
    // like: [{
    //         type: Schema.Types.ObjectId,
    //         ref: 'User',
    //         required: false
    //     }],
    // isHappy: Boolean
})


let Image = mongoose.model('Images', imageSchema)
module.exports = Image