import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement(".app-wrapper");

function PokeModal(props) {
  const customStyles = {
    content: {
      top: "30%",
      left: "39%",
      right: "auto",
      bottom: "",
      marginRight: "-50%",
      //transform: "translate(-50%, -%50",
      width: "400px",
      height: "300px",
      border: "solid 2px #000000",
      borderRadius: "20px",
      fontFamily: `"Press Start 2P", "cursive"`,
      backgroundImage: `url("../../static/assets/container_bg.png")`,
    },
    overlay: {
      backgroundColor: "rgba(1,1,1,0.60)",
    },
  };

  function closeModal() {
    props.setModalIsOpen(false);
  }

  const modalInfo = props.activePokemon.map((p) => {
    return (
      <div className="modal-content-wrapper" key={`${p.name} + " " ${p.id}`}>
        <img src={p.image}></img>
        <div className="pokedex-wrapper">
          <img src={require("../../static/assets/pokedex.png")}></img>
          {`#:${p.id}`}
        </div>
        <div className="pokemon-measurements">
          <div>Height: {Math.round(p.height / 3.048)} ft</div>
          <div>Weight: {Math.round(p.weight / 4.536)} lbs</div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <ReactModal
        style={customStyles}
        isOpen={props.modalIsOpen}
        onRequestClose={closeModal}
        closeTimeoutMS={400}
      >
        <div></div>
        {modalInfo}
      </ReactModal>
    </div>
  );
}

export default PokeModal;
