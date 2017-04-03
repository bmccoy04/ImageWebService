var fs = require('fs');

exports.images = function(req, res){    
    var buffer = "thisisabuffer";
    fs.readFile(__dirname + "/../static/images/ParkerChristmas2015.jpg", function(err, data){
        if(err) {
            console.log(err);
            res.json({name: "test", data:buffer, error:err});
        } else{
            var buffer = data;
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(buffer);
            //res.json({name: "test", data:buffer});
        }

    });    
}
