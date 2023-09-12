import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Form.css";

const Form = () => {
  return (
    <div className="box">
      <h1>Form</h1>
      <form
        method="post"
        action="mern-backend-ten.vercel.app/postData"
        className="container"
      >
        <input type="text" id="name" name="name" placeholder="Name" />
        <input type="email" id="email" name="email" placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
      <Link to="/data" className="showdata">
        Show Data
      </Link>
    </div>
  );
};

export default Form;