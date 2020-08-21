var express = require('express');
var router = express.Router();

// flight model
var _flightModel = require('../models/flight.model');

router.get('/', function(req, res, next) {
	res.render('booking', { title: 'Booking', booking: 'active' });
});

router.post('/', function(req, res, next) {});

module.exports = router;
