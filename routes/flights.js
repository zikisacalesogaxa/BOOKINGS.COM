var express = require('express');
var router = express.Router();

// user model
var _userModel = require('../models/user.model');

/* GET home page. */
router.get('/', function(req, res, next) {
	let loggedIn = req.session.username ? true : false;
	// booked seats
	let monday = [];
	let tuesday = [];
	let wednesday = [];
	let thursday = [];
	let friday = [];
	let saturday = [];
	let sunday = [];

	// cancelled seats
	let mondayCancelled = [];
	let tuesdayCancelled = [];
	let wednesdayCancelled = [];
	let thursdayCancelled = [];
	let fridayCancelled = [];
	let saturdayCancelled = [];
	let sundayCancelled = [];
	_userModel
		.find({})
		.then((users) => {
			users.map((user) => {
				user.monday && user.monday != 'cancelled'
					? monday.push(user.username)
					: mondayCancelled.push(user.username);
				user.tuesday && user.tuesday != 'cancelled'
					? tuesday.push(user.username)
					: tuesdayCancelled.push(user.username);
				user.wednesday && user.wednesday != 'cancelled'
					? wednesday.push(user.username)
					: wednesdayCancelled.push(user.username);
				user.thursday && user.thursday != 'cancelled'
					? thursday.push(user.username)
					: thursdayCancelled.push(user.username);
				user.friday && user.friday != 'cancelled'
					? friday.push(user.username)
					: fridayCancelled.push(user.username);
				user.saturday && user.saturday != 'cancelled'
					? saturday.push(user.username)
					: saturdayCancelled.push(user.username);
				user.sunday && user.sunday != 'cancelled'
					? sunday.push(user.username)
					: sundayCancelled.push(user.username);
			});

			res.render('flights', {
				title: 'Flights',
				flightnav: 'active',
				loggedIn,
				loggedInUser: req.session.username ? req.session.username[0].toUpperCase() : '',
				users,
				monday,
				tuesday,
				wednesday,
				thursday,
				friday,
				saturday,
				sunday,
				mondayCancelled,
				tuesdayCancelled,
				wednesdayCancelled,
				thursdayCancelled,
				fridayCancelled,
				saturdayCancelled,
				sundayCancelled
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
