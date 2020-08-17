import React, { useState, useEffect } from "react";
import PokemonSearchbar from "./pokemon-searchbar";
import PokeModal from "./poke-modal";

function PokemonList({ pokemon }) {
  const [pokeSearch, setPokeSearch] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  const pokemonFiltered = pokemon
    .filter((p) => {
      if (pokeSearch == null) {
        return p;
      } else if (p.name.includes(pokeSearch.pokesearch)) {
        return p;
      }
    })
    .map((p) => {
      return (
        <div className="pokemon-card" key={p.name} onClick={openModal}>
          <img className="" src={p.image}></img>
          {p.name}
        </div>
      );
    });

  return (
    <div className="pokemon-search-container">
      <PokeModal
        setModalIsOpen={setModalIsOpen}
        modalIsOpen={modalIsOpen}
      ></PokeModal>
      <PokemonSearchbar
        pokeSearch={pokeSearch}
        setPokeSearch={setPokeSearch}
      ></PokemonSearchbar>
      <div className="pokemon-list">{pokemonFiltered}</div>
    </div>
  );
}

export default PokemonList;
