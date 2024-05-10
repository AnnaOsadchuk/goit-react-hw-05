import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
/* const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTk3ZjI3Zjg4MmZjYjliODE1ODdlMDAxZTVjMmQyZSIsInN1YiI6IjY2M2RkNDNkNzYwMTE1MmZhYjBmNmI3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bk7FmVFKm3VJPA4u32uYVFh2LkgmLvnCEwAoSMRXW8k";
 */
const accessKey = "5e97f27f882fcb9b81587e001e5c2d2e";

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${accessKey}`, {
    /*   headers: {
      Authorization: token,
    }, */
    params: {
      language: "en-US",
    },
  });
  return response.data;
};
