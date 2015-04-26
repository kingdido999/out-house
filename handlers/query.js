var Checkin = require('../models/checkin');

module.exports = {
  search: function(req, res){
    // get form data
    var startAddress = req.body.startAddress;
    var searchRadius = req.body.searchRadius;
	  var transportMethod = req.body.transportMethod;

    // pass data to the view
    res.render('query', {
      user : req.user,
      address: startAddress,
      radius: searchRadius,
      method: transportMethod
    });
  },

  checkin: function(req, res) {

    Checkin.findOne({
      username: req.user.username,
      bathroom: req.body.bathroom
    }, 'username bathroom', function(err, checkin) {
      if (err) throw err;

      console.log(checkin);
      // if user has already checked in at this bathroom
      if (checkin) {
        console.log(checkin.username + ' has already checked in at ' + checkin.bathroom);
        res.redirect('/profile');
      } else {
        // check in
        Checkin.create({
          username: req.user.username,
          bathroom: req.body.bathroom
        }, function(err, data) {
          if (err) throw err;
          else console.log('Saved: ', data);

          res.redirect('/profile');
        });
      }
    });
  },
}
