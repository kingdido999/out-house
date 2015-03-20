
/*
 * GET search results.
 */

exports.search = function(req, res){
  res.render('search', { title: 'Search Results' });
};