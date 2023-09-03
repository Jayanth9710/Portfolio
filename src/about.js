import React from "react";
import { Link } from "react-router-dom";
import './resume.pdf'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function About() {
  return (
    <div className="container-fluid abt">
      
    <div className=" row card-about">
      <div className="col-12 content-about">
        <div className=" details">
        <Link to="/">
          <ArrowBackIosNewIcon className="home-button">HOME</ArrowBackIosNewIcon>
          </Link>
    
          <h1 id="about">About.</h1>
          
          <h2 className="nice">
            Hi I am <span className="name">Jayanth Kumar.</span>
            <br /> Nice to meet you!
          </h2>
          <h4 className="desc">
            I graduated as a Civil engineer, which gave me have profound
            interests in a wide range of disciplines <br />
            other than the field I graduated. Apart from engineering knowledge, I have a substantial<br/> passion for
            Geography, GIS. In recent days learning anything has become easily accessible. I decided to learn Web development. Initially, I thought it would be best and easy to learn Frontend development alone, but, some kind and great mentors proved it wrong and I got the opportunity to learn Fullstack with Mongo, Express, ReactJS, and NodeJS.
          </h4>
          
          <div className="interests">
            My Multi-Disciplinary interests and Experiences are :
            <ul className="list">
              <li>GIS [Geographical Information System]</li>
              <li>MERN stack Development</li>
              <li>UI Design</li>
              <li>Cartography</li>
            </ul>
          </div>
          <h4 className="desc">
            I believe in Retraining which makes me acquire knowledge about
            many topics.
          </h4>
          <div className="interests">
            
            My leisure activities include :
            <ul className="list">
              <li>Listening music</li>
              <li>Football</li>
              <li>Reading about new technologies/gadgets</li>
            </ul>
          </div>
          To know more about my Education, skills, experiences and much more go through my Resume below.<br/>
          <a href="https://drive.google.com/file/d/1KxjGMPpWOsvn46L3eliYcHK0Ckr087lT/view?usp=sharing" target="_blank" rel="noreferrer" className="resume">Resume</a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
