import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import NewsModal from "./modals/news-modal";

function News() {
  const [news, setNews] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [reloadNews, setReloadNews] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    getNews();
    setReloadNews(false);
  }, [reloadNews]);

  function getNews() {
    axios.get("http://localhost:5000/stories").then((response) => {
      setNews(
        response.data.map((data) => ({
          title: data.title,
          content: data.content,
          id: data.id,
        }))
      );
    });
  }

  function addClickHandler() {
    setModalIsOpen(true);
  }

  function deleteClickHandler() {
    let story = event.target.id;
    if (confirm("Delete the Story?")) {
      axios.delete(`http://localhost:5000/story/${story}`);
      setReloadNews(true);
      alert("Story Deleted.");
    } else {
      alert("Story Not Deleted");
    }
  }

  const populateNews = news.map((el) => {
    return (
      <div className="news-card" key={el.id}>
        <div className="news-options">
          <div className="options">
            <button className="option-button" id={el.id}>
              <i className="fas fa-edit option-icon" id={el.id}></i>
            </button>
            <button
              className="option-button"
              id={el.id}
              onClick={deleteClickHandler}
            >
              <i className="fas fa-times option-icon" id={el.id}></i>
            </button>
          </div>
        </div>

        <h3>{el.title.charAt(0).toUpperCase() + el.title.slice(1)}</h3>
        <p>{el.content.charAt(0).toUpperCase() + el.content.slice(1)}</p>
      </div>
    );
  });

  return (
    <div className="news-page-wrapper">
      <div className="side-button">
        <button className="side-plus-container" onClick={addClickHandler}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className="nav-bar">
        <div className="center-nav">
          <Link className="poke-logo" to="/"></Link>
        </div>
      </div>
      <div className="divider">Poké-News</div>
      <div className="news-container">{populateNews}</div>
      <NewsModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        modalTitle={modalTitle}
        setModalTitle={setModalTitle}
        modalContent={modalContent}
        setModalContent={setModalContent}
        setReloadNews={setReloadNews}
      ></NewsModal>
    </div>
  );
}

export default News;