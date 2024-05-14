import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const getNavLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function HomePage() {
  return (
    <nav className={css.container}>
      <NavLink to="/" className={getNavLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={getNavLink}>
        Movies
      </NavLink>
    </nav>
  );
}
