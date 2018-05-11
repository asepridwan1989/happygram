const Image = require('../models/image')
const { mongoose } = require('./../lib/mongoose-connection');

module.exports = {
    upload: (req, res) => {
        let imgObj = {
            userId: req.user._id,
            imageUrl: req.file.cloudStoragePublicUrl,
            caption: req.body.caption,
            // like: '',
            // isHappy: ''
        }
        const newImg = new Image(imgObj)
        newImg.save()
         .then( newImage => {
             res.status(201).json({
                 message: "upload image, success",
                 data: newImage
             })
         })
         .catch( err => {
             console.log(err)
             res.status(500).json({
                 message: "upload image, fail",
                 data: err
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