const express = require('express'),
  { getContents } = require('../controllers/c_mainpage.js')

const router = express.Router();

router.get('/', getContents)

module.exports = router;
