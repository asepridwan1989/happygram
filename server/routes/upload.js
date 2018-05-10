const express = require('express');
const router = express.Router();
const images = require('../helpers/images')
const { upload } = require('../controllers/upload.controller')

router.post('/', 
    images.multer.single('image'), 
    images.sendUploadToGCS,
    upload
//     (req, res) => {
//     res.send({
//       status: 200,
//       message: 'Your file is successfully uploaded',
//       link: req.file.cloudStoragePublicUrl
//     })
//   }
)

module.exports = router;
