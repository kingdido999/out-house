
/*
 * GET search results.
 */

exports.search = function(req, res){
    var startAddress = req.body.startAddress;
    var searchRadius = req.body.searchRadius;

    res.render('search', { address: startAddress, radius: searchRadius });
};