import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <>
      <p> Sorry this page is not a found!!</p>
      <p>
        {" "}
        Please visit our
        <Link to="/"> home page</Link>
      </p>
    </>
  );
}
