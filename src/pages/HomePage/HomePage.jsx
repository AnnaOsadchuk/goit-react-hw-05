import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";
import ErrorMassage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";

export default function HomePage() {
  const [loader, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      try {
        setLoading(true);
        const newFilm = await getTrendingMovies();
        setFilms(newFilm);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getFilms();
  }, []);

  return (
    <div>
      {loader && <Loader />}
      {error && <ErrorMassage />}
      {films.length > 0 && <MovieList items={films} />}
    </div>
  );
}
