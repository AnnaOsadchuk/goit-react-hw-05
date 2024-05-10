import { NavLink, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ items }) {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {items.map((id, title, poster_path, release_date) => (
        <li className={css.item} key={id}>
          <NavLink className={css.link} to={`/movies/${id}`} state={location}>
            <img
              className={css.img}
              src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
              href={title}
              width="200"
            />
            <p className={css.title}>{title}</p>
            <p className={css.release}>{release_date}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}