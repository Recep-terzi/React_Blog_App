import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <>
          <div style={{ marginTop: "40px" }} key={blog.id} className="blog-preview">
            <Link to={`/blogs/${blog.id}`} >
              <h2>{blog.ad}</h2>
              <h4>{blog.aciklama}</h4>
              <p>{blog.yazar}</p>
              
            </Link>
            
          </div>
        </>
      ))}
    </div>
  );
};

export default BlogList;
