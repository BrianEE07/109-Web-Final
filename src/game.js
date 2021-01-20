import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from "./tabpanel";
import PropTypes from 'prop-types';
import Chicken from './chicken.js';
import Monitor from './Monitor.js';
import Interaction from './interaction.js';
import GameOver from './gameover.js';
import bgm from './sound/titanic.mp3';
// import ChooseChicken from './choosechicken.js';
// import { set } from 'mongoose';
// import {getUser, createChicken} from './axios';


async function pauseMusic(){
  const x = document.getElementById("player");
  await x.pause();
}
async function playMusic(){
  const x = document.getElementById("player");
  await x.play();
}

function restart(){}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
const useStyles = makeStyles({
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
  }
})
function Game() {
  const [user, setUser] = useState('這個世界的神');
  const [tabValue, setTabValue] = useState(0);
  const [foodpos, setFoodPos] = useState([]);
  const [happiness, setHappiness] = useState(90);
  const [hunger, setHunger] = useState(30);
  const [health, setHealth] = useState(0);
  const [houseHeight, setHouseHeight] = useState(0);
  const [houseWidth, setHouseWidth] = useState(0);
  // const [openChooseChicken, setOpenChooseChicken] = useState(true)
  const [muted, setMuted] = useState(false);
  const [stage, setStage] = useState(1);
  const [type, setType] = useState(0);
  const [lifeTime, setLifeTime] = useState(0);
  const houseRef = useRef();
  const classes = useStyles();

  // useEffect(async() => {
  //   const data = await getUser();
  //     setUser(data.account);
  //     setHealth(data.health);
  //     setHappiness(data.happiness);
  //     setHunger(data.hunger);
  //     setType(data.chicken);
  //   if(type == 4){
  //     setOpenChooseChicken(true);
  //   }
  // },[])
  // const create = async() => {
  //   await createChicken(type);
  //   //叫范永為拿function來><><><><><><><><<><<><><><><><><><><<<<><><><><><<><<><
  //   sendFirstStart(user);
  // }
  //handle the BGM playing(invisible without 'controls' in <audio>)
  useEffect(() => {
    if(!muted)
    playMusic();
    else
    pauseMusic();
  },[muted])

  useEffect(() => {
    if(stage == 3){
      //run game over
    }
  },[stage])

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
    console.log(`relativeX: ${e.clientX - houseRef.current.offsetLeft}, relativeY: ${e.clientY - houseRef.current.offsetTop}`)
    setFoodPos([e.clientX - houseRef.current.offsetLeft, e.clientY - houseRef.current.offsetTop])
  }

  return (
    <div className="container_bg">
    <div className="container">
      {/* <ChooseChicken openChooseChicken={openChooseChicken} setType={setType} type={type} create={create}/> */}
      <Monitor user={user} health={health} hunger={hunger} happiness={happiness} setMuted={setMuted} muted={muted} type={type} stage={stage} lifeTime={lifeTime}/>
      <Grid className="visual_block">
        <Grid className="house" onClick={onClickScreen} ref={houseRef}>
          <GameOver stage={stage} restart={restart} lifeTime= {lifeTime}/>
          <Chicken height={houseHeight} width={houseWidth} foodpos={foodpos} setFoodPos={setFoodPos} health={health} hunger={hunger} happiness={happiness} setHealth={setHealth} setHunger={setHunger} setHappiness={setHappiness} stage={stage} type={type}/>
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
