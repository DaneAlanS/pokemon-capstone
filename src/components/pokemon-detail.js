import React, { useState, useEffect } from "react";
import Axios from "axios";
import PokemonList from "./pokemonList";

function PokemonDetail(props) {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPokemon, setTotalPokemon] = useState(152);
  const [startingPokemon, setStartingPokemon] = useState(1);

  var API_URL = "";

  useEffect(() => {
    getPokemon();
  }, [startingPokemon]);

  const loadingRender = (
    <img
      className="loading"
      src={require("../../static/assets/loading.gif")}
    ></img>
  );

  async function getPokemon() {
    if (isLoading == true) return;
    setIsLoading(true);

    const promises = [];

    for (let i = startingPokemon; i < totalPokemon; i++) {
      API_URL = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(
        Axios.get(API_URL).catch((err) => console.log(err, "error"))
      );
    }

    let pokemon = await Promise.all(promises);

    for (let i = 1; i < pokemon.length; i++) {
      if (pokemon[i] == null) {
        pokemon.splice(i);
      }
    }

    if (pokemon) {
      setPokemonInfo(
        pokemon.map((data) => ({
          name: data.data.name,
          id: data.data.id,
          image: data.data.sprites["front_default"],
          stats: data.data.stats,
          height: data.data.height,
          weight: data.data.weight,
          types: data.data.types.map((element) => {
            return element.type.name;
          }),
          abilities: data.data.abilities.map((ability) => {
            return ability.ability.name;
          }),
        }))
      );
    }
    setIsLoading(false);
  }

  return (
    <div className="content-wrapper">
      {isLoading ? loadingRender : null}
      {pokemonInfo && (
        <PokemonList
          pokemonInfo={pokemonInfo}
          startingPokemon={startingPokemon}
          setStartingPokemon={setStartingPokemon}
          totalPokemon={totalPokemon}
          setTotalPokemon={setTotalPokemon}
        ></PokemonList>
      )}
    </div>
  );
}

export default PokemonDetail;
