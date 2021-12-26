import React from "react";
import Tilt from "react-parallax-tilt";
import "./projects.css";
import "./foodiesplore.JPG";
import "./webscrape.JPG";
import "./crudapp.JPG";
import "./shopping.JPG";
import "./brew.JPG"
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./projects.css"

function Projects() {
  return (
    <div className="projicon">
      <Link to="/">
          <ArrowBackIosNewIcon className="home-button1">HOME</ArrowBackIosNewIcon>
          </Link>
    <div className="container">
      
      
      <Tilt options={{ max: 20 }} className="parallax-effect" perspective={320}>
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
                  <a href="https://foodiesplore-map-by-jay.netlify.app/" target="_blank" className="project_link" rel="noreferrer">
                    View Project.
                  </a>
                </div>
                <div className="code_icons">
                  <div className="backend">
                  <a href="https://github.com/Jayanth9710/jaymap-backend" target='_blank' className="code" rel="noreferrer">
                    <GitHubIcon style={{fontSize:"35"}}/>
                    </a>
                    Backend
                  </div>
                  <div className="frontend">
                  <a href="https://github.com/Jayanth9710/Foodiesplore-Frontend" target='_blank' className="code" rel="noreferrer">
                    <GitHubIcon style={{fontSize:"35"}}/>
                    </a>
                    Frontend
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tilt>

      <Tilt options={{ max: 25 }} className="parallax-effect" perspective={350}>
        <div style={{ backgroundColor: "none" }} className="inner-element">
          <div className="card">
            
            <div className="content">
              <div className="card-container">
              <img src="snap.png" alt="shopping" className="card-img"></img>
                <h2>Blog Website</h2>
                <div className="card-footer text-center">
                  <p>A fullstack Blog website created with help of MERN stack.</p>
                  <a href="https://mern-blog-app-jay.netlify.app/" target="_blank" className="project_link" rel="noreferrer">
                    View Project.
                  </a>
                </div>
                <div className="code_icons">
                  <div className="backend">
                <a href="https://github.com/Jayanth9710/MERN-Blog-App-Backend" target='_blank' className="code" rel="noreferrer">
                  <GitHubIcon style={{fontSize:"35"}}/>
                  </a>
                  Backend
                  </div>
                  <div className="frontend">
                    <a href="https://github.com/Jayanth9710/MERN-Blog-App-Frontend" target="_blank" className="code" rel="noreferrer">
                    <GitHubIcon style={{fontSize:"35"}}/>
                    </a>
                    Frontend
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tilt>

      <Tilt options={{ max: 25 }} className="parallax-effect" perspective={350}>
        <div style={{ backgroundColor: "none" }} className="inner-element">
          <div className="card">
            
            <div className="content">
              <div className="card-container">
              <img src="shopping.JPG" alt="shopping" className="card-img"></img>
                <h2>e-Commerce website</h2>
                <div className="card-footer text-center">
                  <p>An e-Commerce website using MERN stack with Redux and Payment Integration.</p>
                  <a href="https://mern-stack-e-commerce.netlify.app/" target="_blank" className="project_link" rel="noreferrer">
                    View Project.
                  </a>
                </div>
                <div className="code_icons">
                  <div className="backend">
                <a href="https://github.com/Jayanth9710/e-commerce-redux-payment-backend" target='_blank' className="code" rel="noreferrer">
                  <GitHubIcon style={{fontSize:"35"}}/>
                  </a>
                  Backend
                  </div>
                  <div className="frontend">
                    <a href="https://github.com/Jayanth9710/e-commerce-app-redux-payment-frontend" target="_blank" className="code" rel="noreferrer">
                    <GitHubIcon style={{fontSize:"35"}}/>
                    </a>
                    Frontend
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tilt>

      <Tilt options={{ max: 25 }} className="parallax-effect" perspective={350}>
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
                  <a href="https://webscrape-hackathon-2-jay.netlify.app/" target="_blank" className="project_link" rel="noreferrer">
                    View project.
                  </a>
                </div>
                <div className="code_icons">
                  <div className="backend">
                <a href="https://github.com/Jayanth9710/Backend-Hackathon-2" target='_blank' className="code" rel="noreferrer">
                  <GitHubIcon style={{fontSize:"35"}}/>
                  </a>
                  Backend
                  </div>
                  <div className="frontend">
                    <a href="https://github.com/Jayanth9710/frontend-hackathon-2" target="_blank" className="code" rel="noreferrer">
                    <GitHubIcon style={{fontSize:"35"}}/>
                    </a>
                    Frontend
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
      
      

      <Tilt options={{ max: 25 }} className="parallax-effect" perspective={350}>
        <div style={{ backgroundColor: "none" }} className="inner-element">
          <div className="card">
            
            <div className="content">
              <div className="card-container">
              <img src="airbnb.png" alt="shopping" className="card-img"></img>
                <h2>Airbnb Clone</h2>
                <div className="card-footer text-center">
                  <p>This project is an attempt of mine to clone the Airbnb website.</p>
                  <a href="https://capstoneproject-airbnbclone-by-jay.netlify.app/" target="_blank" className="project_link" rel="noreferrer">
                    View Project.
                  </a>
                </div>
                <div className="code_icons">
                  <div className="backend">
                <a href="https://github.com/Jayanth9710/capstoneProject-Frontend" target='_blank' className="code" rel="noreferrer">
                  <GitHubIcon style={{fontSize:"35"}}/>
                  </a>
                  Backend
                  </div>
                  <div className="frontend">
                    <a href="https://github.com/Jayanth9710/capstoneProject-Backend" target="_blank" className="code" rel="noreferrer">
                    <GitHubIcon style={{fontSize:"35"}}/>
                    </a>
                    Frontend
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tilt>

      
      
    </div>
    </div>
  );
}

export default Projects;
