module.exports = function(app){
    var test = require('../controllers/test');
    var images = require('../controllers/images');
    app.get('/test', test.test);    
    app.get('/images', images.images);
}