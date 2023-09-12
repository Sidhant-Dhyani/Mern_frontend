import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Data.css";

const Data = () => {
  const [data, setData] = useState([]);
  const handleDelete = (postId) => {
    fetch(`mern-backend-ten.vercel.app/${postId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Post Deleted Successfully");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };
  useEffect(() => {
    fetch("mern-backend-ten.vercel.app/getData")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <div>
      <h1>Data from MongoDB Atlas</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            Name: {item.name}, Email: {item.email}
            <button className="edit_button">Edit</button>
            <button
              className="delete_button"
              onClick={() => handleDelete(item._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Link to="/" className="to_form">
        Back to form
      </Link>
    </div>
  );
};

export default Data;