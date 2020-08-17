import React, { useState, useEffect } from "react";
import PokemonDetail from "./pokemon-detail";
import GlideCarousel from "./glide-carousel";

function App() {
  return (
    <div className="page-wrapper">
      <div className="nav-bar">
        <div className="poke-logo"></div>
      </div>
      <GlideCarousel></GlideCarousel>
      <PokemonDetail></PokemonDetail>
    </div>
  );
}

export default App;
