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

function addTableRow (goose){
    console.log('addTableRows called');

    $('#geeseTableBody').prepend(
        '<tr>' +
            '<td>' + goose.name + '</td>' +
            '<td class=\'ageTD\'>' + goose.age + '</td>' +
            '<td>' + goose.type + '</td>' +
        '</tr>'
    )
}

function addNewGoose (){
    console.log('addNewGoose called');

    var gooseToAdd = {};

    gooseToAdd.name = $('#nameInput').val();
    gooseToAdd.age = $('#ageInput').val();
    gooseToAdd.type = $('#typeInput').val();

    geese.push(gooseToAdd);
    addTableRow(gooseToAdd);

    //clear the input fields
    $('#nameInput').val('');
    $('#ageInput').val('');
    $('#typeInput').val('');
}

function clearGeeseTable(){
    $('#geeseTableBody').empty();
}

var serverGeese = [];

$.get('data/data.json', function(data, status){
    console.log("data:", data);
    console.log('status:', status);    
    console.log('jsonGeese', data.jsonGeese);
    for (var i = 0; i < data.jsonGeese.length; i++) {
        serverGeese.push(data.jsonGeese[i]);
    }
    console.log('serverGeese:', serverGeese);
    
});




$(document).ready(function(){

    $('#addButton').on('click', addNewGoose);

    // for (var i = 0; i < geese.length; i++) {
    //     var toAdd = geese[i];
    //     addTableRow(toAdd);
    // }

console.log(serverGeese);




})