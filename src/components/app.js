import React, { useState, useEffect } from "react";
import PokemonDetail from "./pokemon-detail";
import GlideCarousel from "./glide-carousel";

function App() {
  return (
    <div className="page-wrapper">
      <div className="nav-bar">
        <div className="center-nav" id="bob">
          <div className="poke-logo"></div>
          <div className="news">
            <img className="news-icon"></img>
            News
          </div>
        </div>
      </div>
      <GlideCarousel></GlideCarousel>
      <PokemonDetail></PokemonDetail>
    </div>
  );
}

export default App;
