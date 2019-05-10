module.exports = function (rawMovieData) {
  const { title, description } = rawMovieData;
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
