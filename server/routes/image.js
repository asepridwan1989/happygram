const express = require('express');
const router = express.Router();
const images = require('../helpers/images')
const { upload, getAll } = require('../controllers/upload.controller')

router.post('/', images.multer.single('image'),  images.sendUploadToGCS, upload );
router.get('/', getAll);

module.exports = router;
