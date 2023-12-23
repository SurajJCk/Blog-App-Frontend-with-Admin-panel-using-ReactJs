import { useState } from "react";
//React Quill...................
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [thumbImage, setThumbImage] = useState();

  const postCategories = [
    "Education",
    "Discovery",
    "Art",
    "Business",
    "Investment",
    "Spirituality",
    "Fitness",
    "Nutrition",
    "Music",
    "Sports",
    "Science",
  ];

  //Modules................................
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "+1" },
        { indent: "ordered" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  //Formats................................
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  return (
    <section className="createPosts">
      <div className="container form-container createPosts-container">
        <h2>Create Posts</h2>
        <form action="" className="form createPosts-form">
          <p className="form-message">This is a valid message</p>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {postCategories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          {/* React Quill */}
          <ReactQuill
            modules={modules}
            formats={formats}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="file"
            value={thumbImage}
            onChange={(e) => setThumbImage(e.target.value)}
            accept="png jpg jpeg"
          />
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    </section>
  );
}
