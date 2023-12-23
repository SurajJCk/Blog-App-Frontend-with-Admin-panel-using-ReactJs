import React from "react";
import { Link } from "react-router-dom";

export default function Logout() {
  return (
    <section className="">
      <div className="error-center">
        <h2>Logout</h2>

        <Link to={"/"} className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </section>
  );
}
