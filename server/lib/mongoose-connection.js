const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/db-happygram');
mongoose.connect(`mongodb://userHappygram:1234567890@ds117540.mlab.com:17540/happygram`);

module.exports = { mongoose };