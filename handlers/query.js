

module.exports = {
  search: function(req, res){
      // get address and radius from form data
      var startAddress = req.body.startAddress;
      var searchRadius = req.body.searchRadius;
	  var transportMethod = req.body.transportMethod.toUpperCase();
	  if(transportMethod != 'DRIVING' && transportMethod != 'WALKING' && transportMethod != 'TRANSIT' && transportMethod != 'BICYCLING'){
		transportMethod = 'WALKING';
	}

      // pass data to the view
      res.render('query', {
          user : req.user,
          address: startAddress,
          radius: searchRadius,
		  method: transportMethod
      });
  },
}
