import { Link } from "react-router-dom";
//Import Head Post Data
import { HeadPost } from "../data/data";

export default function Headpost() {
  return (
    <article className="head-post">
      {HeadPost.map(({ id, Image, authorId, title, des }, index) => {
        return (
          <div key={index} className="container head-post-container">
            <div className="post-content">
              <Link to={`posts/${authorId}`}>
                <h1>{title}</h1>
                <p>{des}</p>
              </Link>
            </div>
            <div className="post-image">
              <img src={Image} alt="" />
            </div>
          </div>
        );
      })}
    </article>
  );
}
