import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  function getNews() {
    axios.get("http://localhost:5000/stories").then((response) => {
      setNews(
        response.data.map((data) => ({
          title: data.title,
          content: data.content,
        }))
      );
    });
  }

  const populateNews = news.map((el) => {
    return (
      <div className="news-card">
        <h3>{el.title.charAt(0).toUpperCase() + el.title.slice(1)}</h3>
        <p>{el.content.charAt(0).toUpperCase() + el.content.slice(1)}</p>
      </div>
    );
  });

  return (
    <div className="news-page-wrapper">
      <div className="side-button">
        <div className="side-plus-container">
          <h1>+</h1>
        </div>
      </div>
      <div className="nav-bar">
        <div className="center-nav">
          <Link className="poke-logo" to="/"></Link>
        </div>
      </div>
      <div className="divider">Poké-News</div>
      <div className="news-container">{populateNews}</div>
    </div>
  );
}

export default News;
