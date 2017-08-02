var geeseArray = [
    {
        name: 'appCarl',
        age: 3,
        type: 'beetle'
    },
    {
        name: 'appJulius',
        age: 4,
        type: 'canadian'
    }];
    
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 4000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/geese', function(req, res){
    res.send(geeseArray);
});

app.post('/geese', function(req,res){
    console.log(req.body);
    
    geeseArray.push(req.body);
    res.sendStatus(201);
    console.log('geeseArray',geeseArray);    
});

app.listen(port, function(){
    console.log('listening on port', port);
    
})