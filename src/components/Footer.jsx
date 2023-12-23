//Router link..........................
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <ul className="footer-categories">
          <li>
            <Link to={"/posts/categories/:Education"}>Education</Link>
          </li>
          <li>
            <Link to={"/posts/categories/:Discovery"}>Discovery</Link>
          </li>
          <li>
            <Link to={"/posts/categories/:Art"}>Art</Link>
          </li>
          <li>
            <Link to={"/posts/categories/:Business"}>Business</Link>
          </li>
          <li>
            <Link to={"/posts/categories/:Investment"}>Investment</Link>
          </li>
          <li>
            <Link to={"/posts/categories/:Spirituality"}>Spirituality</Link>
          </li>
          <li>
            <Link to={"/posts/categories/:Fitness"}>Fitness</Link>
          </li>
          <li>
            <Link to={"/posts/categories/:Nutrition"}>Nutrition</Link>
          </li>
          <li>
            <Link to={"/posts/categories/:Music"}>Music</Link>
          </li>
          <li>
            <Link to={"/posts/categories/:Sports"}>Sports</Link>
          </li>
          <li>
            <Link to={"/posts/categories/:Science"}>Science</Link>
          </li>
        </ul>
        <div className="footer-copyright">
          <small>
            &copy; Copyright All Rights Reserved || Suraj Jyoti Changkakoti
          </small>
        </div>
      </div>
    </footer>
  );
}
