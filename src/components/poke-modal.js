import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";

function PokeModal(props) {
  const customStyles = {
    content: {
      top: "50%",
      left: "37%",
      right: "auto",
      marginRight: "-50%",
      //transform: "translate(-50%, -%50",
      width: "500px",
    },
    overlay: {
      backgroundColor: "rgba(1,1,1,0.60)",
    },
  };

  function closeModal() {
    props.setModalIsOpen(false);
  }

  return (
    <div>
      <ReactModal
        style={customStyles}
        isOpen={props.modalIsOpen}
        onRequestClose={closeModal}
      >
        <div>I am login modal</div>
      </ReactModal>
    </div>
  );
}

export default PokeModal;
