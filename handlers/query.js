

module.exports = {
  search: function(req, res){
      // get address and radius from form data
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
}
