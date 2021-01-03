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
        console.log(response);
        const space = '_ ';
        let blankSpaceLength = response.length;
        // append to DOM
        $('#movie-title').empty().append(space.repeat(blankSpaceLength));
    }) // end ajax

} // end startGame