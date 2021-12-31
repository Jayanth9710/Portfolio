
import { Link } from "react-router-dom";import './Skills.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
function Skills() {
  return (
    <div className="skills__page" >
        <Link to="/">
          <ArrowBackIosNewIcon className="home-button1">HOME</ArrowBackIosNewIcon>
          </Link>
<h3 className="Title"> <span className="title__icon"><i className="fas fa-laptop-code" ></i></span>Skills &amp; Technolgies </h3>
     <div className='skills__box'>
     <div className="row">
  <div className="col-sm-5 col-md-6"><span><i class="fab fa-html5"></i></span> HTML5</div>
  <div className="col-sm-5 col-md-6"><span><i class="fab fa-css3-alt"></i></span>  CSS 3</div>
</div>
<div className="row">
  <div className="col-sm-5 col-md-6"><span><i class="fab fa-bootstrap"></i></span> Bootstrap</div>
  <div className="col-sm-5 col-md-6"><span><i class="fab fa-js-square"></i></span>  Javascript</div>
</div>
      <div className="row">
  <div className="col-sm-5 col-md-6"><span><i class="fab fa-react"></i></span> React</div>
  <div className="col-sm-5 col-md-6"><span><i class="fab fa-node-js"></i></span>  Node JS</div>
</div>
<div className="row">
  <div className="col-sm-5 col-md-6"><span><i class="fas fa-database"></i></span>  SQL &amp; NoSQL[MongoDB] </div>
  <div className="col-sm-5 col-md-6"><span><i class="fab fa-git-alt"></i></span>  Git</div>
</div>
<div className="row">
  <div className="col-sm-5 col-md-6"><span><i class="fab fa-npm"></i></span>  npm</div>
  <div className="col-sm-5 col-md-6"><span><i class="far fa-file-code"></i></span>  Express JS</div>
</div>
     </div>

    </div>
  );
}

export default Skills;
