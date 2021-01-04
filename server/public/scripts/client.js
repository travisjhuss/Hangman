$(document).ready(onReady);

function onReady() {
    console.log('jQ loaded');
    $('#start-game').on('click', startGame)
} // end onReady

function startGame() {
    $.ajax({
        url: '/movie-title',
        type: 'GET'
    }).then(function (response){
        $('#movie-title').empty().append(response);
        
    }) // end ajax

} // end startGame