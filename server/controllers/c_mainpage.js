const ModelImage = require('../models/image');

module.exports = {

  getContents: (req, res, next) => {
    ModelImage.find({}, (err, result) => {
      if (err) {
        res.status(400).json({
          message: 'Error: Get images',
          err
        })
      } else {
        res.status(200).json({
          message: 'Get images successful',
          result
        })
      }
    })
  }

}