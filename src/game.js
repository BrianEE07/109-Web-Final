import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from "./tabpanel"
import PropTypes from 'prop-types';
import Chicken from './chicken.js';
import Monitor from './Monitor.js';
import Interaction from './interaction.js';
import bgm from './sound/titanic.mp3';
// import { recieveStage, receiveHungerHealth } from './wsClient';
import WSClient from "./wsClient";
//...

async function pauseMusic(){
  const x = document.getElementById("player");
  await x.pause();
}
async function playMusic(){
  const x = document.getElementById("player");
  await x.play();
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
const useStyles = makeStyles({
  labelContainer: {
    // maxwidth: 100,
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
  }
})
function Game() {
  const { wsmessage, sendFirstStart } = WSClient()
  const [user, setUser] = useState('范詠為');
  const [tabValue, setTabValue] = useState(0);
  const [foodpos, setFoodPos] = useState([]);
  const [inter, setInter] = useState(0);
  const [health, setHealth] = useState(100);
  const [hunger, setHunger] = useState(30);
  const [happiness, setHappiness] = useState(90);
  const [lifeTime, setLifeTime] = useState(0);
  const [stage, setStage] = useState(0);
  const [houseHeight, setHouseHeight] = useState(0);
  const [houseWidth, setHouseWidth] = useState(0);
  const [muted, setMuted] = useState(false);
  const houseRef = useRef();
  const classes = useStyles();

  // listen incoming wsMessage
  useEffect(() => {
    console.log(`Incomming message: { type: ${wsmessage.type}, value: ${wsmessage.value}`)
    switch(wsmessage.type) {
      case 'welcome':
          sendFirstStart(wsmessage.value);
          break;
      case 'lifetime':
          console.log(lifeTime);
          setLifeTime(wsmessage.value);
          break;
      case 'stage':
          setStage(wsmessage.value);
          break;
      case 'hunger':
          setHunger(wsmessage.value);
          break;
      case 'health':
          setHealth(wsmessage.value);
          break;
      case 'happiness':
          setHappiness(wsmessage.value);
          break;
      default:
          break;
    }
  }, [wsmessage])
  // handle the BGM playing(invisible without 'controls' in <audio>)
  useEffect(() => {
    if(!muted)
    playMusic();
    else
    pauseMusic();
  },[muted])
  // listen window resize event
  useEffect(() => {
    const updateHW = () => {
      setHouseHeight(houseRef.current.offsetHeight)
      setHouseWidth(houseRef.current.offsetWidth)
    }
    updateHW()
    console.log(`width ${houseWidth},  height: ${houseHeight}`);
    window.addEventListener('resize', updateHW)
  }, [houseWidth, houseHeight])

  const onClickScreen = (e) => {
    console.log(`relativeX: ${e.clientX - houseRef.current.offsetLeft}, relativeY: ${e.clientY - houseRef.current.offsetTop}`)
    setFoodPos([e.clientX - houseRef.current.offsetLeft, e.clientY - houseRef.current.offsetTop])
  }

  return (
    <div className="container_bg">
    <div className="container">
      <Monitor user={user} health={health} hunger={hunger} happiness={happiness} setMuted={setMuted} muted={muted}/>
      <Grid className="visual_block">
        <Grid className="house" onClick={onClickScreen} ref={houseRef}>
          <Chicken height={houseHeight} width={houseWidth} foodpos={foodpos} hunger={hunger} setFoodPos={setFoodPos} setHunger={setHunger}/>
        </Grid>
        <Interaction classes={classes} tabValue={tabValue} setTabValue={setTabValue}/>
      </Grid>
      <audio id="player" autoplay loop>
          <source src={bgm} type="audio/mp3"/>
      </audio>
    </div>
    </div>
  )
}

export default Game;
