import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const accessKey = "5e97f27f882fcb9b81587e001e5c2d2e";

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${accessKey}`, {
    params: {
      language: "en-US",
    },
  });
  return response.data;
};
