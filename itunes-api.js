const fetch = require("node-fetch");

const lookupMovie = async (movieTitle) => {
  // https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/#lookup
  const itunesUrl = `https://itunes.apple.com/search?term=${movieTitle}&media=movie&entity=movie&limit=1`;
  let response = await fetch(itunesUrl);
  let data = await response.json();
  return data;
}

module.exports = {
  lookupMovie
};
