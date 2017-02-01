var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/api/countries', require('./countries'));

router.get('/', function(req, res) {
  res.json({data: "countries..."});
})

modul.exports = router;