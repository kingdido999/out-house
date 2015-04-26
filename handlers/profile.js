var Checkin = require('../models/checkin');

module.exports = {
   getProfile: function (req, res) {

    Checkin.find(function (err, checkins) {
      if (err) return console.error(err);
      console.log(checkins);

      res.render('profile', {
        user: req.user,
        checkins: checkins
      });
    });
   },
 }
