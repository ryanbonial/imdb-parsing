const fs = require('fs');
const top250 = require('./top-250-raw-data');
const cleanMovie = require('./clean-movie');

const movieArray = Object.keys(top250.movies).map(key => cleanMovie(top250.movies[key]));

fs.writeFile('./imdb-top-movies.json', JSON.stringify(movieArray, null, 2), function (err) {
  console.log(err ? `Error - ${err}` : 'Wrote imdb-top-movies.json');
});