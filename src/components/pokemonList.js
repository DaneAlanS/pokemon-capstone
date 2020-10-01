import React, { useState, useEffect } from "react";
import PokemonSearchbar from "./pokemon-searchbar";
import PokeModal from "../components/modals/poke-modal.js";
import GenTab from "./gentab";

function PokemonList({
  pokemonInfo,
  startingPokemon,
  setStartingPokemon,
  totalPokemon,
  setTotalPokemon,
}) {
  const [pokeSearch, setPokeSearch] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activePokemon, setActivePokemon] = useState([]);

  function capitalize(sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }

  function handleClickedPokemon() {
    let mon = event.target.id;
    for (let i = 0; i < pokemonInfo.length; i++) {
      if (pokemonInfo[i].id == mon) {
        setActivePokemon([pokemonInfo[i]]);
      }
    }
    setModalIsOpen(true);
  }

  const pokemonFiltered = pokemonInfo
    .filter((p) => {
      if (pokeSearch == null) {
        return p;
      } else if (
        p.name
          .toString()
          .toLowerCase()
          .includes(
            pokeSearch.pokesearch.toString().toLowerCase().replace(/\s+/g, "")
          )
      ) {
        return p;
      }
    })
    .map((p) => {
      if (pokemonInfo) {
        return (
          <div
            id={p.id}
            className="pokemon-card"
            key={p.name}
            onClick={handleClickedPokemon}
          >
            <img src={p.image} id={p.id}></img>
            {capitalize(p.name)}
          </div>
        );
      }
    });

  return (
    <div>
      <div className="pokemon-search-container">
        <PokeModal
          setModalIsOpen={setModalIsOpen}
          modalIsOpen={modalIsOpen}
          activePokemon={activePokemon}
          setActivePokemon={setActivePokemon}
        ></PokeModal>
        <GenTab
          startingPokemon={startingPokemon}
          setStartingPokemon={setStartingPokemon}
          totalPokemon={totalPokemon}
          setTotalPokemon={setTotalPokemon}
        ></GenTab>
        <PokemonSearchbar
          pokeSearch={pokeSearch}
          setPokeSearch={setPokeSearch}
        ></PokemonSearchbar>
        <div className="pokemon-list">{pokemonFiltered}</div>
      </div>
    </div>
  );
}

export default PokemonList;
