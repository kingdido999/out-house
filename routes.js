// add handlers
var routes = require('./handlers');
var auth = require('./handlers/auth');
var query = require('./handlers/query');
var profile = require('./handlers/profile');

module.exports = function (app) {

  // index page
  app.get('/', routes.index);

  // user authentication
  app.get('/register', auth.getRegister);
  app.post('/register', auth.postRegister);
  app.get('/login', auth.getLogin);
  app.post('/login', auth.postLogin);
  app.get('/logout', auth.logout);

  // query page
  app.post('/query', query.search);

  // profile page
  app.get('/profile', isLoggedIn, profile.getProfile);
};

// route middleware to make sure user is logged in
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
