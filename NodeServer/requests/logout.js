const passport = require('passport');

module.exports.logout = function(req, res){
    req.logout();
    req.session.destroy();
    res.send("OK");
}
