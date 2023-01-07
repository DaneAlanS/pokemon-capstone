import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className="landing-wrapper">
      <div className="nav-bar">
        <img
          className="poke-logo"
          src={require("../../static/assets/hub.png")}
        ></img>
      </div>
      <Link className="landing-link  pokedex" to="/pokedex">
        <div className="pokedex-image  landing-image">
          <p className="blurb">Search For Your Favorite Pokémon</p>
        </div>
      </Link>
    </div>
  );
}

export default Landing;
