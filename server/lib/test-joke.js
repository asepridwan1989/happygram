
const Joke = require('./joke');

Joke.getJoke().then((result) => {
  console.log(result);
})