import React from "react";
import './resume.pdf'

function About() {
  return (
    <div className="card-about">
      <div className="content-about">
        <div className="details">
          <h1 id="about">About.</h1>
          <h2 className="nice">
            Hi I am <span className="name">Jayanth Kumar.</span>
            <br /> Nice to meet you!
          </h2>
          <h4 className="desc">
            I graduated as an Civil engineer, which makes me have profound
            interests in wide range of disciplines <br />
            other than the field I graduated.Apart from engineering knowledge, I have substantial<br/> passion for
            Geography,GIS.
          </h4>
          
          <div className="interests">
            My Multi-Displinary interests and Experiences are :
            <ul className="list">
              <li>GIS [Geographical Information System]</li>
              <li>MERN stack Development</li>
              <li>UI Design</li>
              <li>Cartography</li>
            </ul>
          </div>
          <h4 className="desc">
            I believe in Retraining which makes me to accquire knowledeg about
            many topics.
          </h4>
          <div className="interests">
            
            My leisure activities include :
            <ul className="list">
              <li>Listening music</li>
              <li>Football</li>
              <li>Reading about new techonoligies/gadgets</li>
            </ul>
          </div>
          To know more about my Education,skills,experiences and much more go through my Resume below.<br/>
          <a href="resume.pdf" download className="resume">Resume</a>
        </div>
      </div>
    </div>
  );
}

export default About;
