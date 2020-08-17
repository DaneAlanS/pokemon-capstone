import React, { useState, useEffect } from "react";
import PokemonSearchbar from "./pokemon-searchbar";

function PokemonList({ pokemon }) {
  function renderPokemon(pokemon) {
    return pokemon.map((p) => {
      return (
        <div className="pokemon-card" key={p.name}>
          <img src={p.image}></img>
          {p.name}
        </div>
      );
    });
  }

  return (
    <div className="pokemon-search-container">
      <PokemonSearchbar></PokemonSearchbar>
      <div className="pokemon-list">{renderPokemon(pokemon)}</div>
    </div>
  );
}

export default PokemonList;
