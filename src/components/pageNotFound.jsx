import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="container">
      <h1>
        Oops!! The Pokemon you are looking for hasn't been added to the Pokedex
        yet.
      </h1>
      <Link to="/" className="btn btn-danger">
        Back to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
