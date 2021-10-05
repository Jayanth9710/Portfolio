import React from "react";
import Tilt from "react-parallax-tilt";
import "./projects.css";
import "./foodiesplore.JPG";
import "./webscrape.JPG";
import "./crudapp.JPG";
import "./shopping.JPG";
import "./brew.JPG"

function Projects() {
  return (
    <div className="container">
      <Tilt options={{ max: 25 }} className="parallax-effect" perspective={500}>
        <div style={{ backgroundColor: "none" }} className="inner-element">
          <div className="card">
            <div className="content">
              <div className="card-container">
                <img
                  src="foodiesplore.JPG"
                  alt="map"
                  className="card-img"
                ></img>
                <h2>FOODIESPLORE</h2>
                <div className="card-footer text-center">
                  <p>
                    A website for pinning your favourite food spots and for
                    checking other's pins to explore the world of different
                    cuisines.
                  </p>
                  <a href="https://foodiesplore-map-by-jay.netlify.app/">
                    View Project.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
      <Tilt options={{ max: 25 }} className="parallax-effect" perspective={500}>
        <div style={{ backgroundColor: "none" }} className="inner-element">
          <div className="card">
            
            <div className="content">
              <div className="card-container">
              <img
              src="webscrape.JPG"
              alt="webscrape"
              className="card-img"
            ></img>
                <h2>Web Scraping</h2>
                <div className="card-footer">
                  <p>
                    This website evidents web scraping by scraping the contents
                    from web pages like Amazon and Flipkart.
                  </p>
                  <a href="https://webscrape-hackathon-2-jay.netlify.app/">
                    View project.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
      <Tilt options={{ max: 25 }} className="parallax-effect" perspective={500}>
        <div style={{ backgroundColor: "none" }} className="inner-element">
          <div className="card">
            
            <div className="content">
              <div className="card-container">
              <img src="crudapp.JPG" alt="crud" className="card-img"></img>
                <h2>CRUD Application</h2>
                <div className="card-footer text-center">
                  <p>A website demonstrating CRUD operations using React.</p>
                  <a href="https://own-ui-crud-jay.netlify.app/">
                    View Project.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
      <Tilt options={{ max: 25 }} className="parallax-effect" perspective={500}>
        <div style={{ backgroundColor: "none" }} className="inner-element">
          <div className="card">
            
            <div className="content">
              <div className="card-container">
              <img src="shopping.JPG" alt="shopping" className="card-img"></img>
                <h2>e-Commerce website</h2>
                <div className="card-footer text-center">
                  <p>An e-Commerce website using React.</p>
                  <a href="https://react-cartpagetask-jay.netlify.app/">
                    View Project.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
      <Tilt options={{ max: 25 }} className="parallax-effect" perspective={500}>
        <div style={{ backgroundColor: "none" }} className="inner-element">
          <div className="card">
            
            <div className="content">
              <div className="card-container">
              <img src="brew.JPG" alt="shopping" className="card-img"></img>
                <h2>Breweries in USA</h2>
                <div className="card-footer text-center">
                  <p>A website for searching breweries across the USA, using API.</p>
                  <a href="https://breweries-in-usa-jay.netlify.app/">
                    View Project.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default Projects;
