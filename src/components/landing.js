import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className="landing-wrapper">
      <div className="nav-bar">
        <div className="hub-icon"></div>
      </div>
      <Link className="pokedex-link" to="/pokedex">
        <div className="pokedex-image">
          <p className="blurb">Search For Your Favorite Pokémon</p>
        </div>
      </Link>

      <Link className="news-link" to="/news">
        <div className="ash-image">
          <p className="blurb"> Check Out the Latest Pokémon News </p>
        </div>
      </Link>
    </div>
  );
}

export default Landing;
