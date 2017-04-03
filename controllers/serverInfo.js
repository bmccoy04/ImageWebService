var os = require('os');

exports.serverInfo = function(req, res){
    var info = {};
    info.hostName = os.hostname();
    info.platform = os.platform();
    info.uptime = os.uptime();
    info.type = os.type();
    info.networkInterfaces = os.networkInterfaces();
    res.json(info);
}

exports.something = function(req, res){
    res.json({someting: 'something'});
}