const itunesApi = require('./itunes-api');

const movieClient = async (rawMovieData) => {
  const { title, description } = rawMovieData;
  let itunesInfo;
  try {
    itunesInfo = await itunesApi.lookupMovie(title)
  } catch (err) {
    console.log(err)
  }
  const cover = itunesInfo.results[0].artworkUrl100;
  const genres = rawMovieData.genres.split(',');
  const cast = rawMovieData.cast.split(',').map(castEntry => {
    const [actor, character] = castEntry.trim().split(' as ');
    return { actor, character };
  });
  const rating = rawMovieData.rating;
  return {
    title,
    description,
    genres,
    cast,
    rating,
    cover
  };
};

module.exports = { movieClient };
