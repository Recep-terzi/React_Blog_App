import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [ad, setAd] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [yazar, setYazar] = useState("Pyson");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const text = { ad, aciklama, yazar };
    e.preventDefault();
    setLoading(true);
    fetch("http://localhost:8000/yazilar/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(text),
    }).then(() => {
      setTimeout(function () {
        setLoading(false);
        navigate("/")
      }, 1000);
    });
  };

  // useEffect(() => {
  //   fetch("http://localhost:8000/yazilar/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setYazar(data);
  //       console.log(data);
  //     });
  // }, []);
  return (
    <div className="create content">
      <h2 style={{ color: "#ff793f" }}>Yeni Yazı Ekle</h2>
      <form onSubmit={handleSubmit}>
        <label>Yazı Başlık:</label>
        <input
          type="text"
          required
          value={ad}
          onChange={(e) => setAd(e.target.value)}
        />
        <label> Yazı Açıklama : </label>
        <textarea
          required
          value={aciklama}
          onChange={(e) => setAciklama(e.target.value)}
        ></textarea>
        <label> Yazar : </label>
        <select value={yazar} onChange={(e) => setYazar(e.target.value)}>
          <option value={"Pyson"}> Pyson </option>
          <option value={"Kalista"}> Kalista </option>
          <option value={"Morgana"}> Morgana </option>
        </select>
        {!loading && <button>Ekle</button>}
        {loading && <button disabled>Yükleniyor</button>}
      </form>
    </div>
  );
};

export default Create;
