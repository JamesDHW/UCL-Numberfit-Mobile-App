const passport = require('passport');

module.export.logout = function(req, res){
    req.logout();
    req.session.destroy();
    res.send("OK");
}
