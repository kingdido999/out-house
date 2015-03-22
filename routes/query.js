
/*
 * POST search query.
 */

exports.search = function(req, res){
    // get address and radius from form data
    var startAddress = req.body.startAddress;
    var searchRadius = req.body.searchRadius;

    // pass data to the view
    res.render('search', {
        title: 'Out House',
        address: startAddress,
        radius: searchRadius
    });
};