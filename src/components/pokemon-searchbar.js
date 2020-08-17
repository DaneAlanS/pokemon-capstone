import React, { useState, useEffect } from "react";

function PokemonSearchbar() {
  return (
    <input
      className="pokemon-search"
      type="text"
      placeholder="Search a Pokemon..."
    ></input>
  );
}

export default PokemonSearchbar;
