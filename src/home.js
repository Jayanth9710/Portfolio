import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "./display.png";

function Home() {
    return (
        <div className="container-fluid home">
      <div className="info">
          <Link to="/about" style={{ textDecoration: 'none' }} >
        <div className="heading">
          <button className="hello">Hello.</button>
          <button className="about">About.</button>
        </div>
        </Link>
        <Link to="/projects" style={{ textDecoration: 'none' }}>
        <div className="projects">
          <button className="iam">I am</button>
          <button className="works">Projects.</button>
        </div>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
        <div className="contact">
          <button className="jay">Jay</button>
          <button className="cont">Contact.</button>
        </div>
        </Link>
      </div>
      <img
        src="./display.png"
        alt="display-pic"
        className="dp"
        align="right"
      ></img>
    </div>
    )
}

export default Home


