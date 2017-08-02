console.log('client.js sourced');

var geese = [
    {
        name: 'Fred',
        age: 5,
        type: 'Beetlegoose'
    },
    {
        name: 'Carla',
        age: 4,
        type: 'Canadian'
    }
];

console.log(geese);

function addTableRows (arr){
    console.log('addTableRows called');
    
    for (var i = 0; i < arr.length; i++) {
        var toAdd = arr[i];
        $('#geeseTableBody').prepend(
            '<tr>' +
                '<td>' + toAdd.name + '</td>' +
                '<td>' + toAdd.age + '</td>' +
                '<td>' + toAdd.type + '</td>' +
            '</tr>'
        )
    }
}

$(document).ready(function(){

    addTableRows(geese);



})