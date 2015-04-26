module.exports = {
   getProfile: function (req, res) {
       res.render('profile', {
         user : req.user
       });
   },
 }
