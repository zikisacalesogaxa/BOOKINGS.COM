const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const flash = require('express-flash');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const app = express();

// import routers
var flightsRouter = require('./routes/flights');
var bookingRouter = require('./routes/booking');
var loginRouter = require('./routes/auth/login');
var logoutRouter = require('./routes/auth/logout');
var signupRouter = require('./routes/auth/signup');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

// setup middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(logger('dev'));
app.use(flash());
app.set('trust proxy', 1); // trust first proxy
app.use(
	cookieSession({
		name: 'session',
		cookie: { maxAge: 60000 },
		keys: [ 'key1', 'key2' ]
	})
);

isLoggedIn = (req, res, next) => {
	if (!req.session.username) {
		return res.redirect('/login');
	}
	next();
};

// setup routers
app.use('/', flightsRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/signup', signupRouter);
app.use('/booking', isLoggedIn, bookingRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
