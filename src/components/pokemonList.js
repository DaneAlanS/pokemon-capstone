import React, { useState, useEffect } from "react";
import PokemonSearchbar from "./pokemon-searchbar";
import PokeModal from "./poke-modal";

function PokemonList({ pokemonInfo }) {
  const [pokeSearch, setPokeSearch] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activePokemon, setActivePokemon] = useState([]);

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
            className="pokemon-card"
            key={p.name}
            onClick={handleClickedPokemon}
          >
            <img id={p.id} src={p.image}></img>
            {p.name}
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
        ></PokeModal>
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
