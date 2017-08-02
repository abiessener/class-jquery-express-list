console.log('client.js sourced');

// adds the passed Goose object to the displayed table
function addTableRow (goose){
    $('#geeseTableBody').prepend(
        '<tr>' +
            '<td>' + goose.name + '</td>' +
            '<td class=\'ageTD\'>' + goose.age + '</td>' +
            '<td>' + goose.type + '</td>' +
        '</tr>'
    )
}

// adds the Goose defined by the input fields to the table AND to the passed array. DOES NOT USE THE PASSED ARRAY FOR INPUT
function addNewGoose (arr){
    var gooseToAdd = {};

    gooseToAdd.name = $('#nameInput').val();
    gooseToAdd.age = $('#ageInput').val();
    gooseToAdd.type = $('#typeInput').val();

    arr.push(gooseToAdd);
    addTableRow(gooseToAdd);

    //clear the input fields
    $('#nameInput').val('');
    $('#ageInput').val('');
    $('#typeInput').val('');
}

// this might not need to be its own function, but for now it does what's on the tin
function clearGeeseTable(){
    $('#geeseTableBody').empty();
}

var dataGeese = [];

// build dataGeese array (which is used to build initial table, and later will be pushed back to the server when updated) from data.json
$.get('data/data.json', function(data, status){
    console.log("data:", data);
    console.log('status:', status);    
    console.log('jsonGeese', data.jsonGeese);

    for (var i = 0; i < data.jsonGeese.length; i++) {
        dataGeese.push(data.jsonGeese[i]);
    }
    console.log('dataGeese:', dataGeese);
    
});

function getGeese(){
    $.ajax({
        method: 'GET',
        url: '/geese',
        success: function(response){ // response will be array of geese
            var appGeese = response;
            console.log('getGeese success', appGeese);
            for (var i = 0; i < appGeese.length; i++) {
                addTableRow(appGeese[i]);
            }
        }
    });
}

$(document).ready(function(){

    // click handler for adding new Goose
    $('#addButton').on('click', function(){
        addNewGoose(dataGeese);
    });

    // build initial table from the dataGeese array, which is built from data.json
    for (var i = 0; i < dataGeese.length; i++) {
        var toAdd = dataGeese[i];
        addTableRow(toAdd);
    }

    getGeese();
    console.log('ajax');
    



})