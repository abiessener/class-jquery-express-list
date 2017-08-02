var express = require('express');
var app = express();
var port = 4000;
var geeseArray = [
    {
        name: 'getCarl',
        age: 3,
        type: 'beetle'
    },
    {
        name: 'getJulius',
        age: 4,
        type: 'canadian'
    }];

app.use(express.static('public'));

app.get('/geese', function(req, res){
    res.send(geeseArray);
});

app.listen(port, function(){
    console.log('listening on port', port);
    
})