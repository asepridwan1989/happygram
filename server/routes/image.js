const express = require('express');
const router = express.Router();
const images = require('../helpers/images')
const { upload, getAll } = require('../controllers/upload.controller')
const { authenticate } = require('./../lib/auth');

router.post('/', authenticate, images.multer.single('image'),  images.sendUploadToGCS, upload );
router.get('/', authenticate, getAll);

module.exports = router;
