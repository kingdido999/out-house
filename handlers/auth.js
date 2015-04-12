var passport = require('passport');
var Account = require('../models/account');

module.exports = {
  getRegister: function(req, res) {
      res.render('register', { });
  },

  postRegister: function(req, res) {
    Account.register(
      new Account({ username : req.body.username }),
      req.body.password,
      function(err, account) {
        if (err) {
            return res.render('register', { account : account });
        }

        passport.authenticate('local')(req, res, function () {
          res.redirect('/');
        });
    });
  },

  getLogin: function(req, res) {
      res.render('login', { user : req.user });
  },

  logout: function(req, res) {
      req.logout();
      res.redirect('/');
  },
}

exports.postLogin = passport.authenticate('local'), function(req, res) {
    res.redirect('/');
}
