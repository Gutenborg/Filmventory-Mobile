const API_BASE = "https://api.themoviedb.org/3/";
const API_KEY = "7a98e86c5a5a99680912f385743ea4cc";

export const getPopularMovies = () => {
  const url = `${API_BASE}discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

  return fetch(url)
    .then((data) => data.json())
    .catch((error) => error.message);
};

export const getSearchMovies = (searchTerm) => {
  const url = `${API_BASE}search/movie?api_key=${API_KEY}&query=${encodeURI(searchTerm)}`;

  return fetch(url)
    .then((data) => data.json())
    .catch((error) => error.message);
};

export const getMovieDetails = (movieId) => {
  const detailsRequest = fetch(`${API_BASE}movie/${movieId}?api_key=${API_KEY}`).then((data) => data.json());
  const creditsRequest = fetch(`${API_BASE}movie/${movieId}/credits?api_key=${API_KEY}`).then((data) => data.json());

  return Promise.all([detailsRequest, creditsRequest])
    .then(([detailsData, creditsData]) => ({
      details: detailsData,
      credits: creditsData,
    }))
    .catch((error) => error.message);
};
