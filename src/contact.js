import React from "react";
import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import  emailjs from 'emailjs-com'
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

require('dotenv').config()

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs.sendForm(`gmail`, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAIL_ID)
    .then((result) => {
    alert("Message Sent, We will get back to you shortly", result.text);
    },
    (error) => {
    alert("An error occurred, Please try again", error.text);
    });
    e.target.reset();
    };

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
    iconUrl: require("leaflet/dist/images/marker-icon.png").default,
    shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
  });
 
const stamenTonerTiles = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png';
  const stamenTonerAttr = '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
//   const position = [51.505, -0.09];
  return (
      <>
      
        <div className="content">
      
          
          
      <div className="map">
    <MapContainer center={[10.805946, 78.695714]} zoom={12} scrollWheelZoom={true} >
  <TileLayer
    attribution={stamenTonerAttr}
    url={stamenTonerTiles}
  />
  <Marker position={[10.821147, 78.697421]} >
    <Popup>
      Hola <br /> Meet me here! Lat:10.821147 ,Long:78.697421
    </Popup>
  </Marker>
</MapContainer>

</div>
<div className="contact-form">
<Link to="/">
          <ArrowBackIosNewIcon className="home-button2">HOME</ArrowBackIosNewIcon>
          </Link>
  <h4 className="collab">Have an idea... Think it would be great for a Collab!? Ping me!</h4>
<form onSubmit={handleSubmit}>
<div className="form-group col-md-6">
      <label for="text">Name</label>
      <input type="text" className="form-control"  placeholder="Enter your name" name="from_name"/>
    </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control"  placeholder="Email"/>
    </div>
    
  </div>
  <div className="form-group">
    <label for="inputAddress">Message</label>
    <textarea type="text" className="form-control textarea"  placeholder="Critics are also most welcomed :P" name="message"/>
  </div>
  <button type="submit" className="btn btn-primary submit">Send</button>
  <div className="icons">
  <a href="https://www.linkedin.com/in/jayanth-kumar-1997j/" target="_blank"  rel="noreferrer"><LinkedInIcon/></a>
  <a href="https://github.com/Jayanth9710/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
  </div>
</form>

</div>

</div>
</>
  
  );
}

export default Contact;
