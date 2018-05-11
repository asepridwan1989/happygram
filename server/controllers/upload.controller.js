const Image = require('../models/image')
const { mongoose } = require('./../lib/mongoose-connection');
const OAuth = require('oauth')
const consumer_key = process.env.consumer_key
const secret = process.env.secret
const user_token = process.env.user_token
const user_secret = process.env.user_secret
const Joke = require('./../lib/joke')

var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    consumer_key,
    secret,
    '1.0A',
    null,
    'HMAC-SHA1',
    console.log('env ==== ',process.env.consumer_key)
  );

module.exports = {
    upload: (req, res) => {
      console.log('masuk sini gha?');
        let imgObj = {
            userId: req.user._id,
            imageUrl: req.file.cloudStoragePublicUrl,
            caption: req.body.caption,
            // like: '',
            // isHappy: ''
        }
        Joke.getJoke().then((result) => {
          console.log('=======================>>>',result.value.joke)
            imgObj.caption = result.value.joke;
            const newImg = new Image(imgObj)
            newImg.save()
             .then( newImage => {
               let status = `posted by , image link: ${req.file.cloudStoragePublicUrl}, caption : ${imgObj.caption}`
               oauth.post(
                   `https://api.twitter.com/1.1/statuses/update.json`,
                   user_token,
                   user_secret,
                   status = {status: status},
                   (err, data, result)=>{
                       if(err){
                         console.log(err);
                         res.status(400).json(err)
                       }else{
                         res.status(200).json(JSON.parse(data))
                       }
                   }
               )
                 // res.status(201).json({
                 //     message: "upload image, success",
                 //     data: newImage
                 // })
             })
             .catch( err => {
                 console.log(err)
                 res.status(500).json({
                     message: "upload image, fail",
                     data: err
                 })
             })
        })


    },
    getAll(req, res) {
        Image.find()
        .populate('userId', 'username')
        .then((images) => {
            res.send({images});
        }, (e) => {
            res.status(400).send(e);
        });
    }
}
