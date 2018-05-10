const Image = require('../models/image')

module.exports = {
    upload: (req, res) => {
        // console.log(req.body)
        let imgObj = {
            // userId: req.body.image,
            imageUrl: req.file.cloudStoragePublicUrl,
            caption: req.body.caption,
            // like: Boolean
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
             res.status(500).json({
                 message: "upload image, fail",
                 data: err
             })
         }) 
        // res.send({
        //     status: 200,
        //     message: 'Your file is successfully uploaded yasir',
        //     link: req.file.cloudStoragePublicUrl
        // })
    }
}