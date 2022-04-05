import { Link } from "react-router-dom";
import "./Skills.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
function Skills() {
  return (
    <div className="container-fluid skills__page">
      {/* <div className="row">
        <Link to="/">
          <ArrowBackIosNewIcon className="home-button1">
            HOME
          </ArrowBackIosNewIcon>
        </Link>
      </div> */}
      <div className="row">
        <div className="col-9">
        <h3 className="Title">
          {" "}
          <span className="title__icon">
            <i className="fas fa-laptop-code"></i>
          </span>
          Skills &amp; Technolgies{" "}
        </h3>
        </div>
        <div className="col-3">
        <Link to="/">
          <ArrowBackIosNewIcon className="home-button1">
            HOME
          </ArrowBackIosNewIcon>
        </Link>
        </div>
        
      </div>
      <div className="row skills__box">
        <div className="col-md-1 col-lg-1 col-xl-1"></div>
        <div className="col-md-10 col-lg-10 col-xl-10 col-12">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-6">
              <span>
                <i class="fab fa-html5"></i>
              </span>{" "}
              HTML5
            </div>
            <div className="col-sm-6 col-md-6 col-6">
              <span>
                <i class="fab fa-css3-alt"></i>
              </span>{" "}
              CSS 3
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-6">
              <span>
                <i class="fab fa-bootstrap"></i>
              </span>{" "}
              Bootstrap
            </div>
            <div className="col-sm-6 col-md-6 col-6">
              <span>
                <i class="fab fa-js-square"></i>
              </span>{" "}
              Javascript
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-6">
              <span>
                <i class="fab fa-react"></i>
              </span>{" "}
              React
            </div>
            <div className="col-sm-6 col-md-6 col-6">
              <span>
                <i class="fab fa-node-js"></i>
              </span>{" "}
              Node JS
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-6">
              <span>
                <i class="fas fa-database"></i>
              </span>{" "}
              SQL &amp; NoSQL[MongoDB]{" "}
            </div>
            <div className="col-sm-6 col-md-6 col-6">
              <span>
                <i class="fab fa-git-alt"></i>
              </span>{" "}
              Git
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-6">
              <span>
                <i class="fab fa-npm"></i>
              </span>{" "}
              npm
            </div>
            <div className="col-sm-6 col-md-6 col-6">
              <span>
                <i class="far fa-file-code"></i>
              </span>{" "}
              Express JS
            </div>
          </div>
        </div>
        <div className="col-md-1 col-lg-1 col-xl-1"></div>
      </div>
    </div>
  );
}

export default Skills;
