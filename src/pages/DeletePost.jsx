import React from "react";
import { Link } from "react-router-dom";

export default function DeletePost() {
  return (
    <section>
      <div className="error-center">
        <h2>Delete</h2>

        <Link to={"/"} className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </section>
  );
}
