import React from "react";
import { Link } from "react-router-dom";
import './resume.pdf'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function AboutMe() {
  return (
    <div className="container-fluid AboutMe_section">
      <div className="row AboutRow" >
        <div className="col-md-1 col-lg-1 col-xl-1"></div>
        <div className="col-md-10 col-lg-10 col-xl-10 col-12 aboutCard">
          <div className="row headingRow">
            <div className="col-md-9 col-lg-9 col-xl-9 col-9">
              <h1 id="about">About.</h1>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3 col-3">
              <Link to="/">
                <ArrowBackIosNewIcon className="home-button">
                  HOME
                </ArrowBackIosNewIcon>
              </Link>
            </div>
          </div>
          <div className="row">
              <div className="col-12 col-md-5 col-lg-5 col-xl-5 ">
              <h2 className="nice">
            Hi I am <span className="name">Jayanth Kumar.</span>
            <br /> Nice to meet you!
          </h2>
              </div>
          </div>
          <div className="row">
              <div className="col-12">
                  <p> I graduated as a Civil engineer, which gave me have profound
            interests in wide range of disciplines <br />
            other than the field I graduated. Apart from engineering knowledge, I have a substantial<br/> passion for
            Geography, GIS. In recent days learning anything has become easily accessible. I decided to learn Web development. Initially, I thought it would be best and easy to learn Frontend development alone, but, some kind and great mentors proved it wrong and I got the opportunity to learn Fullstack with Mongo, Express, ReactJS, and NodeJS.</p>
              </div>
          </div>
          <div className="row">
              <div className="col-12">
              <h4>My Multi-Disciplinary interests and Experiences are:</h4>
              <ul className="list">
              <li>GIS [Geographical Information System]</li>
              <li>MERN stack Development</li>
              <li>UI Design</li>
              <li>Cartography</li>
            </ul>
          </div>
          </div>
          <div className="row">
              <div className="col-12">
              <h4>I believe in Retraining which makes me to acquire knowledge about
            many topics.</h4>
            </div>
            <div className="col-12">
            My leisure activities include :
            <ul className="list">
              <li>Listening music</li>
              <li>Football</li>
              <li>Reading about new technologies/gadgets</li>
            </ul>
            </div>
          </div>
          <div className="row">
              <div className="col-12 resumeTitle">
                  <h4> To know more about my Education, skills, experiences, and much more go through my Resume below.</h4>
         <br/>
         </div>
         <div className="col-4">
          <a href="https://drive.google.com/file/d/1p4016B539PNfOv3a6yKJoAp342j6ASl2/view?usp=sharing" target="_blank" rel="noreferrer" className="resume">Resume</a>
          
          </div>
        </div>
        
      </div>
      <div className="col-md-1 col-lg-1 col-xl-1 "></div>
    </div>
    </div>
  );
}

export default AboutMe;
