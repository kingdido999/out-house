var routes = require('./handlers');
var auth = require('./handlers/auth');
var query = require('./handlers/query');

module.exports = function (app) {

  app.get('/', routes.index);

  app.get('/register', auth.getRegister);
  app.post('/register', auth.postRegister);
  app.get('/login', auth.getLogin);
  app.post('/login', auth.postLogin);
  app.get('/logout', auth.logout);

  app.get('/ping', function(req, res){
      res.send("pong!", 200);
  });

  app.post('/query', query.search);

};
