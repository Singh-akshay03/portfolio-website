import React from "react";
import "./Header.css";
import './CTA'
import CTA from "./CTA";
import ME from '../../Assets/me.png'
import HeaderSocial from "./HeaderSocial";
const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Akshay Kumar Singh</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me"><img src={ME} alt="" /></div>
        <a href="#contact" className="scroll_down">Scroll down</a>
      </div>
    </header>
  );
};

export default Header;
