import React from "react";
import "./Hero.css";
// eslint-disable-next-line no-unused-vars
import dark from "../../assets/dark.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Experience The Best Import And Export Service Provided In India</h1>
        <p>
          We Royal Purandar Exports are Exporter Of Fruits, Vegetable, Spices,
          Copper Articles, Wooden Handicrafts and Marble Statue.
        </p>
        <button className="btn">
          Explore More <img src={dark} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
