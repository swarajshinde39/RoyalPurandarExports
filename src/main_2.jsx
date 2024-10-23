import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Product from "./Components/Products/Product";
import Slider from "./Components/Slider/Slider";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const Main2 = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subTitle="" title="WHY CHOOSE US!" />
        <Programs></Programs>
        <About></About>
        <Title subTitle="" title=" OUR PRODUCTS"></Title>
        <Product></Product>
        <Title subTitle="" title={"We Are Certified Company"}></Title>
        <Slider></Slider>
        <Title subTitle="CONTACT US" title="Get in Touch!"></Title>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main2;
