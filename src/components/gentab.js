import React, { useState, useEffect } from "react";

function GenTab(props) {
  function handlePokeGeneration() {
    let gen = event.target.id;
    switch (gen) {
      case "gen1":
        props.setStartingPokemon(1);
        props.setTotalPokemon(152);
        break;
      case "gen2":
        props.setStartingPokemon(152);
        props.setTotalPokemon(252);
        break;
      case "gen3":
        props.setStartingPokemon(252);
        props.setTotalPokemon(387);
        break;
      case "gen4":
        props.setStartingPokemon(387);
        props.setTotalPokemon(494);
        break;
      case "gen5":
        props.setStartingPokemon(494);
        props.setTotalPokemon(650);
        break;
      case "gen6":
        props.setStartingPokemon(650);
        props.setTotalPokemon(722);
        break;
      case "gen7":
        props.setStartingPokemon(722);
        props.setTotalPokemon(810);
        break;
      case "gen8":
        props.setStartingPokemon(810);
        props.setTotalPokemon(894);
        break;
    }
  }

  return (
    <div className="tab-container">
      <div className="gen-tab" id="gen1" onClick={handlePokeGeneration}>
        Generation 1
      </div>
      <div className="gen-tab" id="gen2" onClick={handlePokeGeneration}>
        Generation 2
      </div>
      <div className="gen-tab" id="gen3" onClick={handlePokeGeneration}>
        Generation 3
      </div>
      <div className="gen-tab" id="gen4" onClick={handlePokeGeneration}>
        Generation 4
      </div>
      <div className="gen-tab" id="gen5" onClick={handlePokeGeneration}>
        Generation 5
      </div>
      <div className="gen-tab" id="gen6" onClick={handlePokeGeneration}>
        Generation 6
      </div>
      <div className="gen-tab" id="gen7" onClick={handlePokeGeneration}>
        Generation 7
      </div>
      <div className="gen-tab" id="gen8" onClick={handlePokeGeneration}>
        Generation 8
      </div>
    </div>
  );
}

export default GenTab;
