import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import PokemonDetail from "./pokemon-detail";
import GlideCarousel from "./glide-carousel";

function pokedex() {
  return (
    <div className="page-wrapper">
      <div className="nav-bar"></div>
      <GlideCarousel></GlideCarousel>
      <PokemonDetail></PokemonDetail>
    </div>
  );
}

export default pokedex;
