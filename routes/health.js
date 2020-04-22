var express = require('express')
var router = express.Router()

/* health */
router.get('/', function (req, res, next) {
  res.send('ok')
})

module.exports = router
