var express = require('express');
var router = express.Router();

// user model
var _userModel = require('../models/user.model');

var flightController = require('../controllers/flight.controller');

router.get('/', function(req, res, next) {
	let username = req.session.username;
	_userModel.findOne({ username }).then((user) => {
		res.render('booking', {
			title: 'Booking',
			bookingnav: 'active',
			loggedInUser: username ? username[0].toUpperCase() : '',
			monday: user.monday && user.monday != 'cancelled' ? user.monday : '',
			tuesday: user.tuesday && user.tuesday != 'cancelled' ? user.tuesday : '',
			wednesday: user.wednesday && user.wednesday != 'cancelled' ? user.wednesday : '',
			thursday: user.thursday && user.thursday != 'cancelled' ? user.thursday : '',
			friday: user.friday && user.friday != 'cancelled' ? user.friday : '',
			saturday: user.saturday && user.saturday != 'cancelled' ? user.saturday : '',
			sunday: user.sunday && user.sunday != 'cancelled' ? user.sunday : ''
		});
	});
});

router.post('/', function(req, res, next) {
	let { booking_day, booking_time, cancel_button } = req.body;
	let username = req.session.username;
	flightController.book(username, booking_day, booking_time).then((result) => {
		if (result == 'booked') {
			res.redirect('/booking');
		}
	});
});

module.exports = router;
