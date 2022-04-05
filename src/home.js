import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import "./App.css";
import "./display.png";


function Home() {
  const style = {
    fontWeight: 600,
    fontSize: 40,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    
  };
  const[showTip,setShowTip] = useState(false);
  const[showMobileView,setShowMobileView] = useState(false);
  const handleOpen = () => {
    setShowTip(true)
    localStorage.setItem('show',true)
  }
  ;
  const handleClose = () => setShowTip(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleMobileView = () => {
    setShowMobileView(!showMobileView)
    console.log(showMobileView)
  }

  useEffect(()=>{
    const pop = localStorage.getItem('pop');
    if(!pop) {
      handleOpen();
      localStorage.setItem('pop',1);
     
    }
    if(!showTip) return null;

    
  },[showTip,showMobileView])
    return ( <>
      <div className="modal">
      <Button onClick={handleOpen}>Tip</Button>
      <Modal
        fullScreen={fullScreen}
        open={showTip}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            To navigate through portfolio, Hover over the each words.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Each words appearing after the hovering is a link to the respective section.
          </Typography>
        </Box>
      </Modal>
      </div>
        <div className="container-fluid home">
          <div className="row">
            <div className="col-8">
            <Link to='/contact' style={{textDecoration:'none'}}>
          <button className="contact-button">Contact</button></Link>
            </div>
            <div className="col-4 showMobileTip"></div>
         <p className="mobileTip" onClick={handleMobileView}>Tap here to show title</p>
          </div>
          <div className="row">
      <div className="col-md-9 col-lg-9 col-xl-9 col-12 info">
          <Link to="/about" style={{ textDecoration: 'none' }} >
        <div className="heading">
          <button className={showMobileView ? "hello" :"hello nomobileview"}>Hello.</button>
          {/* <button className="hello nomobleview">Hello.</button> */}
          <button className={showMobileView ? "about" :" about mobileview"}>About.</button>
          {/* <button className="about mobileview">About.</button> */}
        </div>
        </Link>
        <Link to="/projects" style={{ textDecoration: 'none' }}>
        <div className="projects">
        <button className={showMobileView ? "iam" :" iam nomobileview"}>I am.</button>
          {/* <button className="iam nomobleview">I am</button> */}
          <button className={showMobileView ? "works" :"works mobileview"}>Projects.</button>
          {/* <button className="works mobileview">Projects.</button> */}
        </div>
        </Link>
        <Link to="/skills" style={{ textDecoration: 'none' }}>
        <div className="contact">
          <button className={showMobileView ? "jay" :" jay nomobileview"}>Jay.</button>
          {/* <button className="jay nomobleview">Jay</button> */}
          <button className={showMobileView ? "cont" :"cont mobileview"}>Skills</button>
          {/* <button className="cont mobileview">Skills</button> */}
        </div>
        </Link>
      </div>
      <div className="col-md-3 col-lg-3 col-xl-3 col-12">
      <img
        src="./display.png"
        alt="display-pic"
        className="dp"
        align="right"
      ></img>
      </div>
      </div>
    </div>
    </>
    )
}

export default Home


