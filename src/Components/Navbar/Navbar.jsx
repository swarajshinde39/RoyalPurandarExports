import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
// import { Link } from "react-router-dom";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Product from "../Products/Product";
import Contact from "../Contact/Contact";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>
          <Link
            activeClass="active"
            to={Hero}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link to={About} smooth={true} offset={0} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to={Product} smooth={true} offset={0} duration={500}>
            Products
          </Link>
        </li>
        <li>
          <Link
            to={Contact}
            smooth={true}
            offset={0}
            duration={500}
            className="btn"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
