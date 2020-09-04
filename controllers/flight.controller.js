var _userModel = require('../models/user.model');

module.exports = {
	book: async (username, day, time) => {
		const filter = { day, time };
		return _userModel
			.findOneAndUpdate({ username: username }, { [day]: time })
			.then((user) => {
				return 'booked';
			})
			.catch((err) => {
				console.log(err);
			});
	},
};
