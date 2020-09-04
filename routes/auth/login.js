var express = require('express');
var router = express.Router();

// user model
var authController = require('../../controllers/auth.controller');

router.get('/', function(req, res, next) {
	var loggedIn = (req.session.username) ? true : false;
	res.render('auth/login', { title: 'Login', loginnav: 'active', loggedIn });
});

router.post('/', function(req, res, next) {
	let { username, password } = req.body;
	authController.login(username, password).then((result) => {
		if (result == 'exist') {
			req.session.username = username;
			res.redirect('/booking');
		} else {
			req.flash('error', 'Invalid username or password');
			res.redirect('/login');
		}
	});
});

module.exports = router;
