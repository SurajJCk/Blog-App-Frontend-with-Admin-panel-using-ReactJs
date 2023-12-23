//Dummy posts Data.................
import { DummyPosts } from "../data/data";

//UseState.........................
import { useState } from "react";

//Components.....................
import PostItem from "./PostItem";
import HeadPost from "./HeadPost";

export default function Posts() {
  const [posts, setPosts] = useState(DummyPosts);
  return (
    <section className="posts">
      {/* ................Head Post................. */}
      <div className="head-post-aria">
        <HeadPost />
      </div>

      {posts.length > 0 ? (
        <div className="container post-container">
          {posts.map(({ id, Image, authorId, category, title, des }, index) => (
            <PostItem
              key={index}
              Image={Image}
              category={category}
              authorId={authorId}
              title={title}
              des={des}
              postId={id}
            />
          ))}
        </div>
      ) : (
        <h2 className="error-center">No posts found</h2>
      )}
    </section>
  );
}
