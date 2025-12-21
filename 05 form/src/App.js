// src/App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    course: ""
  });

  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(data);
    setData({ name: "", email: "", course: "" });
  };

  return (
    <div className="container">
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={data.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={data.course}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="output">
          <h3>Submitted Details</h3>
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Course: {submitted.course}</p>
        </div>
      )}
    </div>
  );
}

export default App;
