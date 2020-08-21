var _userModel = require('../models/user.model');

module.exports = {
	login: async (username, password) => {
		return _userModel
			.findOne({
				username: username,
				password: password
			})
			.then((user) => {
				if (user) {
					return 'exist';
				} else {
					return 'not exist';
				}
			})
			.catch((err) => {
				console.log(err);
			});
	},
	signup: async (username, password) => {
		return _userModel
			.findOne({
				username: username
			})
			.then((user) => {
				if (user) {
					console.log(user);
					return 'exist';
				} else {
					_userModel
						.create({
							username: username,
							password: password
						})
						.then((user) => {
							return 'success';
						})
						.catch((err) => {
							console.log(err);
						});
				}
			});
	}
};
