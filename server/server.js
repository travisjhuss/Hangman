const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const PORT = 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));

// serve back static files
app.use(express.static('server/public'));

let movieTitles = [
    'The Shining',
    'There Will Be Blood',
    'Fargo',
    'The Godfather',
    'Star Wars',
    'The Lord of the Rings',
    'Do the Right Thing',
    'The Dark Knight',
    'The Avengers'
];

let randomMovie = movieTitles[Math.floor(Math.random() * movieTitles.length)];

console.log(randomMovie);


// server
app.listen(PORT, () => {
    console.log('server running on: ', PORT);
  }); 