var passport = require('passport');
var User = require('../models/user');

module.exports = {
  getRegister: function(req, res) {
      res.render('register', { });
  },

  postRegister: function(req, res) {
    User.register(new User({ username : req.body.username }), req.body.password,
      function(err, user) {
        if (err) {
            return res.render('register', { info: err });
        }

        user.email = req.body.email;
        user.gender = req.body.gender;
        user.age = req.body.age;

        user.save(function(err, data) {
          if (err) console.log(err);
          else console.log('Saved: ', data);
        });

        passport.authenticate('local')(req, res, function () {
          res.redirect('/');
        });
    });
  },

  getLogin: function(req, res) {
      res.render('login', { user : req.user });
  },

  postLogin: function(req, res) {
    passport.authenticate('local')(req, res, function() {
      res.redirect('/');
    });
  },

  logout: function(req, res) {
      req.logout();
      res.redirect('/');
  },
}
