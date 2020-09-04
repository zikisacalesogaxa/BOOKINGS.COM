const mongoose = require('mongoose');

const flightSchema = mongoose.Schema({
	day: {
		type: String,
	},
	time: {
		type: String
	},
	capacity: {
		type: Number,
		default: 10
	},
	booked_seats: {
		type: Array
	},
	cancelled_seats: {
		type: Number,
		default: 0
	},
	seats_left: {
		type: Number
	}
});

var flight = mongoose.model('flights', flightSchema);

module.exports = flight;
