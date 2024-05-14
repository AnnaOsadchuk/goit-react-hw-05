import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const authorization =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTgwYjg0MDEyZjQzMWU4MjkzZTYwZWQ2MDhmNzUxNiIsInN1YiI6IjY2M2RkNDNkNzYwMTE1MmZhYjBmNmI3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aWJNDZJ6KM9rUML7WydpW83mifWRoG2sD6zDDHtcMDs";

export const getTrendingMovies = async () => {
  const response = await axios.get("trending/movie/day", {
    headers: {
      Authorization: authorization,
    },
    params: {
      language: "en-US",
    },
  });
  return response.data.results;
};

export const getSearchMovie = async (query, page) => {
  const response = await axios.get("search/movie", {
    headers: {
      Authorization: authorization,
    },
    params: {
      language: "en-US",
      query,
      page,
    },
  });
  return response.data.results;
};

export const getMovieDetails = async (movie_id) => {
  const response = await axios.get(`movie/${movie_id}`, {
    headers: {
      Authorization: authorization,
    },
    params: {
      language: "en-US",
      movie_id,
    },
  });
  return response.data;
};
export const getCredits = async (movie_id) => {
  const response = await axios.get(`movie/${movie_id}/credits`, {
    headers: {
      Authorization: authorization,
    },
    params: {
      language: "en-US",
      movie_id,
    },
  });
  return response.data.cast;
};

export const getReviews = async (movie_id) => {
  const response = await axios.get(`movie/${movie_id}/reviews`, {
    headers: {
      Authorization: authorization,
    },
    params: {
      language: "en-US",
      movie_id,
    },
  });
  return response.data.results;
};
