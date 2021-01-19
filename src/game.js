import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from "./tabpanel"
import PropTypes from 'prop-types';
import Chicken from './chicken.js';
import Monitor from './Monitor.js';
import Interaction from './interaction.js';
import ReactAudioPlayer from 'react-audio-player';
import bgm from './sound/bgm.mp3'
//...


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
const useStyles = makeStyles({
  icon:{
    height: '20%',
    width: '90%',
    boxShadow: '0 3px 5px 2px black',
    justify: 'center',
  },
  labelContainer: {
    paddingLeft: 0,
    paddingRight: 0
  },
  root: {
    width: '100%',
    maxWidth: 360,
  },
  list_img:{
    width: '30%',
    height: '100%'
  },
  chicken:{
    height: '80px',
    width: '80px'
  }
})
function Game() {
  const [user, setUser] = useState('范詠為');
  const [tabValue, setTabValue] = useState(0);
  const [inter, setInter] = useState(0);
  const [life, setLife] = useState(90);
  const [hunger, setHunger] = useState(30);
  const [health, setHealth] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [houseHeight, setHouseHeight] = useState(0);
  const [houseWidth, setHouseWidth] = useState(0);
  const [clicked, setClicked] = useState(false);
  const houseRef = useRef();
  
  const classes = useStyles();
  useEffect(() => {
    const updateHW = () => {
      setHouseHeight(houseRef.current.offsetHeight)
      setHouseWidth(houseRef.current.offsetWidth)
    }
    updateHW()
    console.log('width:', {houseWidth},  'height:',  {houseHeight});
    window.addEventListener('resize', updateHW)
  }, [houseWidth, houseHeight])

  const onClickScreen = (e) => {
    setMouseX(e.clientX - houseRef.current.offsetLeft) 
    setMouseY(e.clientY - houseRef.current.offsetTop)
    setClicked(true)
  }

  return (
    <div className="container_bg">
    <div className="container">
      <Monitor user={user} health={health} hunger={hunger} life={life}/>
      <Grid className="visual_block">
        <Grid className="house" onClick={onClickScreen} ref={houseRef}>
          <Chicken height={houseHeight} width={houseWidth} mouseX={mouseX} mouseY={mouseY} clicked={clicked} setClicked={setClicked}/>
        </Grid>
        <Interaction classes={classes} tabValue={tabValue} setTabValue={setTabValue}/>
      </Grid>
      <audio id="player" autoplay loop>
          <source src={bgm} type="audio/mp3"/>
      </audio>
      {/* <ReactAudioPlayer
          classes="bgm_player"
          src={bgm}
          autoPlay={true}
          controls
        /> */}
          {/* var x = document.getElementById("player"); 
  x.play(); */}
    </div>
    </div>
  )
}

export default Game;
