const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/db-happygram');
mongoose.connect(`mongodb://userHappygram:1234567890@ds117540.mlab.com:17540/happygram`,(err) => {
    if(!err) console.log('database connected...')
    else throw new Error(err)
})

module.exports = { mongoose };