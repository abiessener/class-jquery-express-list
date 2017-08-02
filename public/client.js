// adds the passed Goose object to the displayed table
function addTableRow (goose){
    $('#geeseTableBody').prepend(
        '<tr>' +
            '<td>' + goose.name + '</td>' +
            '<td class=\'ageTD\'>' + goose.age + '</td>' +
            '<td>' + goose.type + '</td>' +
        '</tr>'
    );
}

// adds the Goose defined by the input fields to the table AND to the passed array. DOES NOT USE THE PASSED ARRAY FOR INPUT
function addNewGoose (arr){
    var gooseToAdd = {};

    gooseToAdd.name = $('#nameInput').val();
    gooseToAdd.age = $('#ageInput').val();
    gooseToAdd.type = $('#typeInput').val();

    arr.push(gooseToAdd);
    addTableRow(gooseToAdd);
    postGoose(gooseToAdd);

    //clear the input fields
    $('#nameInput').val('');
    $('#ageInput').val('');
    $('#typeInput').val('');
}

// this might not need to be its own function, but for now it does what's on the tin
function clearGeeseTable(){
    $('#geeseTableBody').empty();
}

// gets an array of Geese from the /geese URL and adds them to the table
function getGeese(){
    var geeseFromApp = [];
    $.ajax({
        method: 'GET',
        url: '/geese',
        success: function(response){ // response will be array of geese
            geeseFromApp = response;
            console.log('getGeese success');
            // add the geese data from app.js to the initial table
            for (var i = 0; i < geeseFromApp.length; i++) {
                addTableRow(geeseFromApp[i]);
                geese.push(geeseFromApp[i]);
            }            
        }
    });
}

// POSTs the passed array to the /update URL
// NOT WORKING YET
function postGoose(goose){
    $.ajax({
        method: 'POST',
        url:'/geese',
        data: goose,
        success: function(){
            console.log('POST done');
        }
    });
}

// build dataGeese array (which is used to build initial table, and later will be pushed back to the server when updated) from data.json
// var dataGeese = [];
// $.get('data/data.json', function(data, status){
//     // console.log("data:", data);
//     // console.log('status:', status);    
//     // console.log('jsonGeese', data.jsonGeese);

//     for (var i = 0; i < data.jsonGeese.length; i++) {
//         dataGeese.push(data.jsonGeese[i]);
//     }
//     console.log('dataGeese:', dataGeese);
    
// });

var geese = [];

$(document).ready(function(){

    console.log('DOM ready');
    
    // click handler for adding new Goose
    $('#addButton').on('click', function(){
        addNewGoose(geese);
    });

    // build initial table from the dataGeese array, which is built from data.json
    // for (var i = 0; i < dataGeese.length; i++) {
    //     var toAdd = dataGeese[i];
    //     addTableRow(toAdd);
    // }

    // get the geese from app.js 
    getGeese();




    



})