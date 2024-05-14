import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorMassage from "../ErrorMessage/ErrorMessage";
import { getReviews } from "../../movies-api";

export default function MovieCast() {
  const { movieId } = useParams();
  const [loader, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState([]);
  /*   console.log(cast); */

  useEffect(() => {
    const getCast = async () => {
      try {
        setLoading(true);
        const newReviews = await getReviews(movieId);
        console.log(newReviews);
        /*   setReviews(newReviews.cast); */
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
      {reviews && (
        <ul>
          {reviews.map((item) => (
            <li key={item.id}>
              <h2>Author: {item.author}</h2>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
