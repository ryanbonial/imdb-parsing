const itunesApi = require('./itunes-api');

module.exports = async function (rawMovieData) {
  const { title, description } = rawMovieData;
  await itunesApi.lookupMovie(title)
    .then(itunesInfo => {console.log(itunesInfo.results[0].trackName)})
    .catch(err => console.log(err));
  const genres = rawMovieData.genres.split(',');
  const cast = rawMovieData.cast.split(',').map(castEntry => {
    const [actor, character] = castEntry.trim().split(' as ');
    return { actor, character };
  });
  const rating = +rawMovieData.rating;
  return {
    title,
    description,
    genres,
    cast,
    rating
  };
};
