// add handlers
var routes = require('./handlers');
var auth = require('./handlers/auth');
var query = require('./handlers/query');

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

};
