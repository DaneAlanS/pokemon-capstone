import React, { useState, useEffect } from "react";

function PokemonSearchbar(props) {
  function handleChange(e) {
    props.setPokeSearch({ [e.target.name]: event.target.value });
  }

  return (
    <input
      className="pokemon-search"
      name="pokesearch"
      type="text"
      placeholder="Search a Pokemon..."
      onChange={handleChange}
    ></input>
  );
}

export default PokemonSearchbar;
