import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import axios from "axios";

ReactModal.setAppElement(".app-wrapper");

function NewsModal(props) {
  const [errorMSG, setErrorMSG] = useState("");

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
    if (props.modalTitle.length > 100 || props.modalContent.length > 500) {
      setErrorMSG("Exceeds Character Length!");
      return console.log("Exceeds Character Length!");
    }
    if (props.modalTitle.length <= 0 || props.modalContent.length <= 0) {
      setErrorMSG("Cannot Submit Empty Field!");
      return console.log("Cannot Submit Empty Field!");
    }

    if (props.activeEdit) {
      console.log("NEED TO ADD AXIOS PUT METHOD");
    } else {
      //RELOADING NEWS IS HAPPENING BEFORE POST SOMETIMES
      axios
        .post("http://localhost:5000/story", {
          title: props.modalTitle,
          content: props.modalContent,
        })
        .then(
          props.setReloadNews(true),
          props.setModalIsOpen(false),
          setErrorMSG(""),
          props.setModalContent(""),
          props.setModalTitle("")
        );
    }
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
                value={props.modalTitle}
              ></input>
              <span
                style={
                  props.modalTitle.length > 100 ? { color: "#ff0000" } : null
                }
              >
                {props.modalTitle.length}
              </span>{" "}
              of 100 Characters
            </div>
            <div className="content-input wrapper">
              Content:{" "}
              <textarea
                className="content-input"
                onChange={handleContentChange}
                value={props.modalContent}
              ></textarea>
              {props.modalContent.length} of 500 Characters
            </div>
            <div className="form-submit-wrapper">
              <div className="error-wrapper">{errorMSG}</div>
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
