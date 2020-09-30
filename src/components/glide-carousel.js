import React, { useState, useEffect } from "react";
import Glide from "@glidejs/glide";

function GlideCarousel() {
  useEffect(() => {
    new Glide(".glide", {
      type: "carousel",
      autoplay: 4000,
      hoverpause: true,
    }).mount();
  }, 1);

  return (
    <div className="glide">
      <div data-glide-el="track" className="glide__track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <div className="slide one">
              <p>'Pokémon Journeys' Part 2 Coming to Netflix!</p>
            </div>
          </li>
          <li className="glide__slide">
            <div className="slide two">
              <p>New Pokémon Sword And Shield Event Features</p>
            </div>
          </li>
          <li className="glide__slide">
            <div className="slide three">
              <p>Pokémon GO integration coming to Pokémon Home!</p>
            </div>
          </li>
          <li className="glide__slide">
            <div className="slide four">
              <p>New Pokémon Home Update Out!</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="glide__bullets" data-glide-el="controls[nav]">
        <button className="glide__bullet" data-glide-dir="=0"></button>
        <button className="glide__bullet" data-glide-dir="=1"></button>
        <button className="glide__bullet" data-glide-dir="=2"></button>
        <button className="glide__bullet" data-glide-dir="=3"></button>
      </div>
    </div>
  );
}

export default GlideCarousel;
