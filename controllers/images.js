var fs = require('fs');

exports.images = function(req, res){
    fs.readFile(__dirname + "/../static/images/ParkerChristmas2015.jpg", function(err, data){
        if(err) {
            res.json({name: "test", data:buffer, error:err});
        } else{
            var buffer = data;
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(buffer);
            //res.json({name: "test", data:buffer});
        }
    });    
}

exports.image = function(req, res){
    if(req.params.id >1){
       fs.readFile(__dirname + "/../static/images/ParkerChristmas2015.jpg", function(err, data){
            if(err) {
                res.json({name: "test", data:buffer, error:err});
            } else{
                var buffer = data;
                res.writeHead(200, {'Content-Type': 'image/jpeg'});
                res.end(buffer);
                //res.json({name: "test", data:buffer});
            }
        }); 
    } else {
        res.json({error:"hahahahaha not 0"});
    }
}
