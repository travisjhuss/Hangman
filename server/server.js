const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));

// serve back static files
app.use(express.static('server/public'));

// array of movie titles
let movieTitles = [
    'THE SHINING',
    'THERE WILL BE BLOOD',
    'FARGO',
    'THE GODFATHER',
    'STAR WARS',
    'DO THE RIGHT THING',
    'SORRY TO BOTHER YOU',
    'THE DARK KNIGHT',
    'PITCH PERFECT',
    'ELECTION'
];
// array of all guesses
let guessHistory = ['F', 'A', 'T', 'E'];

// generate random movie to use in game
let randomMovie = movieTitles[Math.floor(Math.random() * movieTitles.length)];
// convert into an array by character
let randomMovieArray = randomMovie.split('');
// compare guesses to array of random movie title
function checkGuesses(guesses, answer) {
    let movieWithBlanks = [];
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === ' ') {
            movieWithBlanks.push(' ');
        } else {
            
        }
    }
    return movieWithBlanks;
} // end checkGuesses


console.log(checkGuesses(guessHistory, randomMovieArray));



// GET route for randomMovie
app.get('/movie-title', (req, res) => {
    console.log('in movie-title');
    res.send(randomMovie);
}) // end GET

console.log(randomMovie);


// server
app.listen(PORT, () => {
    console.log('server running on: ', PORT);
}); 