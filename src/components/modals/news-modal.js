import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import axios from "axios";

ReactModal.setAppElement(".app-wrapper");

function NewsModal(props) {
  const customStyles = {
    content: {
      top: "30%",
      left: "36%",
      right: "auto",
      bottom: "",
      marginRight: "-50%",
      //transform: "translate(-50%, -%50",
      width: "500px",
      height: "400px",
      border: "solid 2px #000000",
      borderRadius: "20px",
      paddingBottom: "60px",
      fontFamily: `"Baloo Tamma 2", "cursive"`,
      backgroundImage: `url("../../static/assets/container_bg.png")`,
    },
    overlay: {
      backgroundColor: "rgba(1,1,1,0.60)",
    },
  };

  function closeModal() {
    props.setModalIsOpen(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/story", {
        title: props.modalTitle,
        content: props.modalContent,
      })
      .then(props.setReloadNews(true), props.setModalIsOpen(false));
  }

  function handleTitleChange(e) {
    props.setModalTitle(event.target.value);
  }

  function handleContentChange(e) {
    props.setModalContent(event.target.value);
  }

  return (
    <div>
      <ReactModal
        style={customStyles}
        isOpen={props.modalIsOpen}
        onRequestClose={closeModal}
        closeTimeoutMS={400}
      >
        <div className="news-modal-content-wrapper">
          <form className="new-story-form" onSubmit={handleSubmit}>
            <div className="title-input-wrapper">
              Title:{" "}
              <input
                type="text"
                className="title-input"
                onChange={handleTitleChange}
              ></input>
            </div>
            <div className="content-input wrapper">
              Content:{" "}
              <textarea
                className="content-input"
                onChange={handleContentChange}
              ></textarea>
            </div>
            <div className="form-submit-wrapper">
              <button type="submit" value="Submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </ReactModal>
    </div>
  );
}

export default NewsModal;
