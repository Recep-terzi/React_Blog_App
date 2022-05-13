import React, { useState, useEffect } from "react";
import BlogList from "../BlogList/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:8000/yazilar")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(function () {
          setBlogs(data);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  // const handleClick = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };
  return (
    <div className="content">
      <h1>Anasayfa</h1>
      {loading && <div className="loading">Loading...</div>}
      <BlogList blogs={blogs}  />
    </div>
  );
};

export default Home;
