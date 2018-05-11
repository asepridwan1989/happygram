const express = require('express'),
  { getContents, getOneContents } = require('../controllers/c_mainpage.js')

const router = express.Router();

router.get('/', getContents)
router.get('/getOne/:id', getOneContents)

module.exports = router;
