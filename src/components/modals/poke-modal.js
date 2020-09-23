import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement(".app-wrapper");

function PokeModal(props) {
  const [pokemonTypes, setPokemonTypes] = useState([]);

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
    //    props.setActivePokemon([]);
  }

  const modalInfo = props.activePokemon.map((p) => {
    const mapPokemonAbilities = p.abilities.map((ability) => {
      return (
        <div className="ability" key={ability}>
          {ability}
        </div>
      );
    });

    const mapPokemonTypes = p.types.map((el) => {
      return (
        <img
          className="pokemon-type"
          key={el}
          src={require(`../../../static/assets/${el}type.png`)}
        ></img>
      );
    });

    return (
      <div className="modal-content-wrapper" key={`${p.name} + " " ${p.id}`}>
        <div className="pokemon-image">
          <img src={p.image}></img>
        </div>
        <div className="pokemon-type-wrapper">{mapPokemonTypes}</div>
        <div className="pokedex-wrapper">
          <img src={require("../../../static/assets/pokedex.png")}></img>
          {`#:${p.id}`}
        </div>
        <div className="pokemon-ability-wrapper">
          Abilities:{mapPokemonAbilities}
        </div>
        <div className="pokemon-measurements">
          <div>Height: {Math.round(p.height / 3.048)} ft</div>
          <div>Weight: {Math.round(p.weight / 4.536)} lbs</div>
        </div>
        <div className="bulbapedia-link-wrapper">
          <a
            className="bulbapedia-link"
            target="_blank"
            href={`https://bulbapedia.bulbagarden.net/wiki/${p.name}_(Pok%C3%A9mon)`}
          >
            Learn more at Bulbapedia
          </a>
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
