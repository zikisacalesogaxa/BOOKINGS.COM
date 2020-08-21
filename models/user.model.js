const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
		unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
	monday: {
		type: String,
	},
	tuesday: {
		type: String,
	},
	wednesday: {
		type: String,
	},
	thursday: {
		type: String,
	},
	friday: {
		type: String,
	},
	saturday: {
		type: String,
	},
	sunday: {
		type: String,
	}
});

var user = mongoose.model('users', userSchema);

module.exports = user;