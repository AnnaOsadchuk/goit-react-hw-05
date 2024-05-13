import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field } from "formik";
import ErrorMassage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
/* import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn"; */

import { getSearchMovie } from "../../movies-api";
import css from "./MoviesPage.module.css";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

export default function MoviesPage() {
  const [loader, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [notFoundError, setNotFoundError] = useState(false);

  useEffect(() => {
    const getFilms = async () => {
      try {
        setError(false);
        setLoading(true);
        setNotFoundError(false);
        const newFilm = await getSearchMovie();
        setFilms(newFilm);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getFilms();
  }, []);

  const handleSubmit = async (values, actions) => {
    setFilms([]);
    setPage(1);
    if (!values.queryMovie) {
      toast.error("Please, enter your request!");
    } else {
      const searchResults = await getSearchMovie(values.queryMovie, page);
      setFilms(searchResults);
    }
    actions.resetForm();
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <div className={css.container}>
        {loader && <Loader />}
        {error && <ErrorMassage />}
        <Formik initialValues={{ queryMovie: "" }} onSubmit={handleSubmit}>
          <Form className={css.form}>
            <Field
              className={css.input}
              type="text"
              name="queryMovie"
              autoComplete="off"
              autoFocus
              placeholder="Search movies..."
            />
            <button className={css.btn} type="submit">
              Search
            </button>
            <Toaster />
          </Form>
        </Formik>
        {notFoundError && (
          <p>Not found! Please, try to make another request!</p>
        )}
      </div>

      <div>
        {films.length > 0 && <MovieList items={films} />}
        {films.length > 0 && !loader && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}
      </div>
    </div>
  );
}
