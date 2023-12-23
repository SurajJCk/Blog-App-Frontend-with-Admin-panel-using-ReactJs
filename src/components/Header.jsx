import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  return (
    <nav>
      <div className="container nav-container">
        <Link className="nav-logo" to={"/"}>
          <h3>
            SJC <span>Blog</span>
          </h3>
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to={"/profile/id"}>Surajjck</Link>
          </li>
          <li>
            <Link to={"/create"}>CreatePosts</Link>
          </li>
          <li>
            <Link to={"/authors"}>Authors</Link>
          </li>
          <li>
            <Link to={"/logout"}>Logout</Link>
          </li>
        </ul>
        <button className="nav-toggle-button">
          <FaBars />
          <IoMdClose />
        </button>
      </div>
    </nav>
  );
}
