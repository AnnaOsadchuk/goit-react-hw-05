import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../../movies-api";
import ErrorMassage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";

import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [loader, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [details, setDetails] = useState([]);
  const location = useLocation();
  const goBackLink = useRef(location.state ?? "/movies");

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setDetails(movieDetails);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getMovie();
  }, [movieId]);

  const { poster_path, title, overview, release_date, vote_average, genres } =
    details;

  return (
    <div className={css.container}>
      {loader && <Loader />}
      {error && <ErrorMassage />}
      {details && (
        <div className={css.container}>
          <NavLink className={css.link} to={goBackLink.current}>
            <button className={css.btn} type="button">
              Go back
            </button>
          </NavLink>
          <div className={css.wrapper}>
            <img
              className={css.img}
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
            />
            <div className={css.list}>
              <ul>
                <li>
                  <h2 className={css.title}>
                    {title} ({release_date})
                  </h2>
                </li>
                <li>
                  <p className={css.text}>
                    User Score: {vote_average && vote_average.toFixed(1)} %
                  </p>
                </li>
                <li>
                  <p className={css.text}>Overview: </p>
                  <p>{overview}</p>
                </li>
                <li className={css.genres}>
                  <p className={css.text}>Genres:</p>
                  <ul className={css.genresList}>
                    {genres &&
                      genres.map((genre) => (
                        <li key={genre.id}>{genre.name} </li>
                      ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <h2>Additional information</h2>
          <ul>
            <li>
              <NavLink className={css.navLink} to="cast">
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink className={css.navLink} to="reviews">
                Reviews
              </NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </div>
  );
}
