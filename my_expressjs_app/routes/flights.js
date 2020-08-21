var express = require('express');
var router = express.Router();

var _flightModel = require('../models/flight.model');

/* GET home page. */
router.get('/', function(req, res, next) {
	_flightModel
		.find({})
		.then((flight) => {
			let { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = flight[0];

			res.render('flights', {
				title: 'Flights',
				flightnav: 'active',
				monday,
				tuesday,
				wednesday,
				thursday,
				friday,
				saturday,
				sunday
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
