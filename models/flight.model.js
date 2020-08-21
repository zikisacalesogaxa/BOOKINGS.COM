const mongoose = require('mongoose');

const flightSchema = mongoose.Schema({
	monday: {
		morning: {
			capacity: Number,
			booked_seats: Array,
			cancelled_seats: Number,
			seats_left: Number
		},
		midday: {
			capacity: Number,
			booked_seats: Array,
			cancelled_seats: Number,
			seats_left: Number
		},
		evening: {
			capacity: Number,
			booked_seats: Array,
			cancelled_seats: Number,
			seats_left: Number
		}
	},
	tuesday: {
		morning: {
			capacity: Number,
			booked_seats: Array,
			cancelled_seats: Number,
			seats_left: Number
		},
		midday: {
			capacity: Number,
			booked_seats: Array,
			cancelled_seats: Number,
			seats_left: Number
		},
		evening: {
			capacity: Number,
			booked_seats: Array,
			cancelled_seats: Number,
			seats_left: Number
		}
	},
	wednesday: {
		morning: {
			capacity: Number,
			booked_seats: Array,
			cancelled_seats: Number,
			seats_left: Number
		},
		midday: {
			capacity: Number,
			booked_seats: Array,
			cancelled_seats: Number,
			seats_left: Number
		},
		evening: {
			capacity: Number,
			booked_seats: Array,
			cancelled_seats: Number,
			seats_left: Number
		}
	},
	thursday: {
		morning: {
			capacity: Number,
			booked_seats: Array,
			cancelled_seats: Number,
			seats_left: Number
		},
		midday: {
			capacity: Number,
			booked_seats: Array,
			cancelled_seats: Number,
			seats_left: Number
		},
		evening: {
			capacity: Number,
			booked_seats: Array,
			cancelled_seats: Number,
			seats_left: Number
		}
	},
	friday: {
		morning: {
			capacity: Number,
			booked_seats: Array,
			cancelled_seats: Number,
			seats_left: Number
		},
		midday: {
			capacity: Number,
			booked_seats: Array,
			cancelled_seats: Number,
			seats_left: Number
		},
		evening: {
			capacity: Number,
			booked_seats: Array,
			cancelled_seats: Number,
			seats_left: Number
		}
	},
	saturday: {
		morning: {
			capacity: Number,
			booked_seats: Array,
			cancelled_seats: Number,
			seats_left: Number
		},
		midday: {
			capacity: Number,
			booked_seats: Array,
			cancelled_seats: Number,
			seats_left: Number
		},
		evening: {
			capacity: Number,
			booked_seats: Array,
			cancelled_seats: Number,
			seats_left: Number
		}
	},
	sunday: {
		morning: {
			capacity: Number,
			booked_seats: Array,
			cancelled_seats: Number,
			seats_left: Number
		},
		midday: {
			capacity: Number,
			booked_seats: Array,
			cancelled_seats: Number,
			seats_left: Number
		},
		evening: {
			capacity: Number,
			booked_seats: Array,
			cancelled_seats: Number,
			seats_left: Number
		}
	}
});

var flight = mongoose.model('flights', flightSchema);

module.exports = flight;
