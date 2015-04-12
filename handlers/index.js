

module.exports = {
   index: function (req, res) {
       res.render('index', {
         title: 'Out House',
         user : req.user
       });
   },
 }
