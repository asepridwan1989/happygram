const axios = require('axios');

class Joke {
  static getJoke() {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: 'http://api.icndb.com/jokes/random',
      }).then((response) => {
        resolve(response.data);
      }).catch((e) => {
        reject(e);
      });
    })
  }
  static getJoke_() {
    const joke = axios({
      method: 'GET',
      url: 'http://api.icndb.com/jokes/random',
    })
    return joke;
  }
}

module.exports = Joke;