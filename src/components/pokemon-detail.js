import React, { useState, useEffect } from "react";
import Axios from "axios";
import PokemonList from "./pokemonList";

function PokemonDetail() {
  const [pokemon, setPokemon] = useState();
  var API_URL = "";

  useEffect(() => {
    getPokemon();
  }, 1);

  async function getPokemon() {
    const promises = [];
    for (let i = 1; i < 152; i++) {
      API_URL = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(Axios.get(API_URL));
    }

    let pokemon = await Promise.all(promises); // let pokemon = []
    if (pokemon) {
      setPokemon(
        pokemon.map((data) => ({
          name: data.data.name,
          id: data.data.id,
          image: data.data.sprites["front_default"],
        }))
      );
    }
  }

  return (
    <div className="content-wrapper">
      {pokemon && <PokemonList pokemon={pokemon}></PokemonList>}
    </div>
  );
}

export default PokemonDetail;
