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
  const handleOpen = () => {
    setShowTip(true)
    localStorage.setItem('show',true)
  }
  ;
  const handleClose = () => setShowTip(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(()=>{
    const pop = localStorage.getItem('pop');
    if(!pop) {
      handleOpen();
      localStorage.setItem('pop',1);
    }
    if(!showTip) return null;
  },[showTip])
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
          <Link to='/contact' style={{textDecoration:'none'}}>
          <button className="contact-button">Contact</button></Link>
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
        <Link to="/skills" style={{ textDecoration: 'none' }}>
        <div className="contact">
          <button className="jay">Jay</button>
          <button className="cont">Skills</button>
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
    </>
    )
}

export default Home


