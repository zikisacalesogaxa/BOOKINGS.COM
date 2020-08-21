var express = require('express');
var router = express.Router();

// user model
var authController = require('../../controllers/auth.controller');

router.get('/', function(req, res, next) {
	res.render('auth/signup', { title: 'Signup', signupnav: 'active' });
});

router.post('/', function(req, res, next) {
	let { username, password } = req.body;
	authController.signup(username, password).then((result) => {
		if (result == 'exist') {
			req.flash('error', 'User already exists, try Logging In');
			res.redirect('/signup');
		} else {
			req.session.username = username;
			res.redirect('/');
		}
	});
});

module.exports = router;
