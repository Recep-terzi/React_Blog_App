import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

const Detail = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();


  const handleDelete = () => {
    fetch("http://localhost:8000/yazilar/" + id,{
      method:'DELETE'
    }).then(() => {
      navigate("/")
    })
  }

  useEffect(() => {
    fetch("http://localhost:8000/yazilar/" + id)
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
  }, [id]);
  return (
    <div className="blog-details content">
      {loading && <div className="loading">Loading...</div>}
      <h2>{blogs.ad}</h2>
      <h4>{blogs.aciklama}</h4>
      <p>{blogs.yazar}</p>
      <button onClick={handleDelete}>Sil</button>
    </div>
  );
};

export default Detail;
