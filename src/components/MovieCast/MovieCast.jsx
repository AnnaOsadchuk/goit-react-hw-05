import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorMassage from "../ErrorMessage/ErrorMessage";
import { getCredits } from "../../movies-api";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [loader, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cast, setCast] = useState([]);
  /*   console.log(cast); */

  useEffect(() => {
    const getCast = async () => {
      try {
        setLoading(true);
        const newCast = await getCredits(movieId);
        /* setCast(newCast); */
        setCast(newCast.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      {error && <ErrorMassage />}
      {cast && (
        <ul className={css.container}>
          {cast.map((item) => (
            <li key={item.id}>
              <img
                className={css.img}
                src={`https://image.tmdb.org/t/p/w300${item.profile_path}`}
                alt={item.name}
                width="100"
              />
              <p>{item.name}</p>
              <p>Character: {item.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
