//Router Link.......................
import { Link } from "react-router-dom";

//Component..........................
import PostAuthor from "../components/PostAuthor";

//PostDetail Image

import postDetailImage from "../assets/1.jpg";

export default function PostDetail() {
  return (
    <section>
      <div className="container postDetail-container">
        <div className="postDetail-top">
          <PostAuthor />
          <div className="postDetail-buttons">
            <Link to={"/posts/werwer/edit"} className="btn btn-sm btn-primary">
              Edit
            </Link>
            <Link to={"/posts/werwer/delete"} className="btn btn-sm btn-danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <div className="postDetail-image">
          <img src={postDetailImage} alt="" />
        </div>
        <div className="postDetail-para">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            quibusdam natus veniam minus perspiciatis qui, possimus
            exercitationem nihil sint nobis recusandae illo. Quae assumenda eum
            consequatur voluptatem iure, voluptates deserunt non harum quis.
            Praesentium, quis accusantium, quasi hic cupiditate placeat soluta
            voluptates officia ipsum culpa quam! Quod vitae quas perferendis.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            quibusdam natus veniam minus perspiciatis qui, possimus
            exercitationem nihil sint nobis recusandae illo. Quae assumenda eum
            consequatur voluptatem iure, voluptates deserunt non harum quis.
            Praesentium, quis accusantium, quasi hic cupiditate placeat soluta
            voluptates officia ipsum culpa quam! Quod vitae quas perferendis.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            quibusdam natus veniam minus perspiciatis qui, possimus
            exercitationem nihil sint nobis recusandae illo. Quae assumenda eum
            consequatur voluptatem iure, voluptates deserunt non harum quis.
            Praesentium, quis accusantium, quasi hic cupiditate placeat soluta
            voluptates officia ipsum culpa quam! Quod vitae quas perferendis.
          </p>
        </div>
      </div>
    </section>
  );
}
