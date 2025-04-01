import { useRouteError, Link } from "react-router";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="container">
      <h1 className="title">Oops! Something went wrong.</h1>
      <p className="message">We couldn't find the page you were looking for.</p>
      <p className="errorDetails">
        <strong>Error {error.status}:</strong>{" "}
        {error.statusText || "Unknown Error"}
      </p>
      <Link to="/" className="link">
        Go back to the homepage
      </Link>
    </div>
  );
};

export default Error;
