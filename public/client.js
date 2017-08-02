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

function addTableRow (goose){
    console.log('addTableRows called');

    $('#geeseTableBody').prepend(
        '<tr>' +
            '<td>' + goose.name + '</td>' +
            '<td class=\'ageTD\'>' + goose.age + '</td>' +
            '<td>' + goose.type + '</td>' +
        '</tr>'
    )
    
    // for (var i = 0; i < arr.length; i++) {
    //     var toAdd = arr[i];
    //     $('#geeseTableBody').prepend(
    //         '<tr>' +
    //             '<td>' + toAdd.name + '</td>' +
    //             '<td class=\'ageTD\'>' + toAdd.age + '</td>' +
    //             '<td>' + toAdd.type + '</td>' +
    //         '</tr>'
    //     )
    // }
}

function addNewGoose (){
    console.log('addNewGoose called');
    var gooseToAdd = {};
    gooseToAdd.name = $('#nameInput').val();
    gooseToAdd.age = $('#ageInput').val();
    gooseToAdd.type = $('#typeInput').val();
    geese.push(gooseToAdd);
    console.log('gooseToAdd:', gooseToAdd);
    addTableRow(gooseToAdd);

    //clear the input fields
    $('#nameInput').val('');
    $('#ageInput').val('');
    $('#typeInput').val('');
    
    
    
}

/*
var serverGeese = [];

$.ajax({
    url: 'data/data.json',
    dataType: 'json',
    success: function(res){

    }
})
*/

$(document).ready(function(){

    $('#addButton').on('click', addNewGoose);

    for (var i = 0; i < geese.length; i++) {
        var toAdd = geese[i];
        addTableRow(toAdd);
    }

    // addTableRows(geese);
    // addTableRows(serverGeese);




})