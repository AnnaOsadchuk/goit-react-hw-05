import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  /*  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); */
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const data = await getTrendingMovies();
      setFilms(data);
    }
    getMovies();
  }, []);

  return (
    <div>
      <h1>Home page</h1>
      {films.length > 0 && <MovieList items={films} />}
    </div>
  );
}
