import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpeg";
import white_arrow from "../../assets/white-arrow.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>
      <div className="about-right">
        <h3>ABOUT</h3>
        <h2>ROYAL PURANDAR EXPORTS</h2>
        <p>
          Royal Purandar Export, founded by Mr. Akash Waghole, is a export
          company based in satara, Maharashtra, India. With a steadfast
          commitment to quality and excellence, we specialize in delivering a
          diverse range of products from India.
        </p>
        <p>
          Our portfolio includes fresh fruits, vegetables, premium spices,
          Wooden Handicrafts, and Copper Articles. Additionally, we offer
          top-grade hardware products and exquisite copper articles, ensuring
          that our buyers receive only the finest goods that India has to offer.
        </p>
        <p>
          Our business is driven by a passion for connecting India’s rich
          agricultural and industrial heritage with global markets. We
          meticulously source our products from trusted suppliers, ensuring that
          each item meets stringent quality standards. From the lush fields that
          produce our fruits and vegetables to the skilled artisans crafting our
          copper articles, Royal Purandar Export is dedicated to preserving the
          authenticity and integrity of every product we export.
        </p>
        <button className="--btn">
          Read More <img src={white_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default About;
