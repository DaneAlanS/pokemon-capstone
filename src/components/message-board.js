import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import MessageModal from "./modals/message-modal";

function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [reloadMessages, setReloadMessages] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [activeEdit, setActiveEdit] = useState();

  useEffect(() => {
    getMessages();
  }, [reloadMessages]);

  function getMessages() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://flaskpokenewscapstoneapi.herokuapp.com/stories"
      )
      .then((response) => {
        setMessages(
          response.data.map((data) => ({
            title: data.title,
            content: data.content,
            id: data.id,
          }))
        ),
          setReloadMessages(false);
      });
  }

  function addClickHandler() {
    setModalIsOpen(true);
  }

  function editClickHandler() {
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].id == event.target.id) {
        setActiveEdit(messages[i].id);
        setModalTitle(messages[i].title);
        setModalContent(messages[i].content);
        setModalIsOpen(true);
      }
    }
  }

  function deleteClickHandler() {
    let story = event.target.id;
    if (confirm("Delete the Message?")) {
      axios.delete(
        `https://cors-anywhere.herokuapp.com/https://flaskpokenewscapstoneapi.herokuapp.com/story/${story}`
      );
      setReloadMessages(true);
      alert("Message Deleted.");
    } else {
      alert("Message Not Deleted");
    }
  }

  const populateMessages = messages.map((el) => {
    return (
      <div className="message-card" key={el.id}>
        <div className="message-options">
          <div className="options">
            <button
              className="option-button"
              id={el.id}
              onClick={editClickHandler}
            >
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
    <div>
      <div className="message-page-wrapper">
        <div className="side-button">
          <button className="side-plus-container" onClick={addClickHandler}>
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <div className="nav-bar">
          <Link className="nav-link" to="/">
            <img
              className="poke-logo"
              src={require("../../static/assets/hub.png")}
            ></img>
          </Link>
        </div>
        <div className="divider">Message Board</div>
        <div className="message-container">{populateMessages}</div>
        <MessageModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          modalTitle={modalTitle}
          setModalTitle={setModalTitle}
          modalContent={modalContent}
          setModalContent={setModalContent}
          activeEdit={activeEdit}
          setActiveEdit={setActiveEdit}
          setReloadMessages={setReloadMessages}
        ></MessageModal>
      </div>
    </div>
  );
}

export default MessageBoard;
