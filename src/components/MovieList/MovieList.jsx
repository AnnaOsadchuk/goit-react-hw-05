import { NavLink, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ items }) {
  const location = useLocation();

  return (
    <>
      <ul className={css.list}>
        {items.map(({ id, title, poster_path, vote_average }) => (
          <li className={css.item} key={id}>
            <NavLink className={css.link} state={location} to={`/movies/${id}`}>
              <img
                className={css.img}
                src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                alt={title}
                width="200"
              />
              <p className={css.title}>{title}</p>
              <p className={css.rating}> Rating: {vote_average.toFixed(1)}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
