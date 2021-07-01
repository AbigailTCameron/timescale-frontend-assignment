const API_KEY = process.env.REACT_APP_API_KEY;

//access the tmdb api and get the currently trending catalog

const requests = {
  fetchTrending: {
    url: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  },
  fetchTrending2: {
    url: `/movie/popular?api_key=${API_KEY}&language=en-US&page=`,
  },
  search: {
    url: `/search/movie?api_key=${API_KEY}&query=`,
  },
};

export default requests;
