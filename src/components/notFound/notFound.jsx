import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";

function NotFound() {
  return (
    <div className="notFound">
      <div>
        <Link to="/">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png"
            alt="Sorry! We couldn't find that page. Try searching or go to Amazon's home page."
          />
        </Link>
      </div>

      <img
        id="d"
        alt="Dogs of Amazon"
        src="https://images-na.ssl-images-amazon.com/images/G/01/error/26._TTD_.jpg"
      />
    </div>
  );
}

export default NotFound;
