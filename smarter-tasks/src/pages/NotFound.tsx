// NotFound.tsx
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/home" id="backToHomeButton">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
