module.exports = function(app){
    var test = require('../controllers/test');
    var systemInfo = require('../controllers/serverInfo');
    app.get('/test', test.test);    
    app.get('/systemInfo', systemInfo.serverInfo);
    app.get('/someting', systemInfo.something);
}