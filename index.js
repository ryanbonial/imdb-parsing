const fs = require('fs');
const top250 = require('./top-250-raw-data');
const { movieClient } = require('./clean-movie');

const movieRequests = Object.keys(top250.movies).slice(0, 12).map(async (key) => await movieClient(top250.movies[key]));

Promise.all(movieRequests).then(movieArray => {
  fs.writeFile('./imdb-top-movies.json', JSON.stringify(movieArray, null, 2), function (err) {
    console.log(err ? `Error - ${err}` : 'Wrote imdb-top-movies.json');
  });
});
