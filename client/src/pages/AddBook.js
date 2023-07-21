import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/travel/add", {
      title,
      descr,
      image,
    });
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="descr"
            onChange={(e) => setDescr(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default AddBook;
