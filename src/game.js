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
import WSClient from "./wsClient";

import ChooseChicken from './choosechicken.js';
import {getUser, createChick} from './chicken/axios';


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


  const { wsmessage, sendGameStart, sendLogOut } = WSClient()
  const [tabValue, setTabValue] = useState(0);     //
  const [user, setUser] = useState('這個世界的神'); //user's name
  const [foodpos, setFoodPos] = useState([]);      //food position
  const [hunger, setHunger] = useState(30);        //hunger of chicken
  const [health, setHealth] = useState(100);       //health of chicken
  const [happiness, setHappiness] = useState(90);  //happiness of chicken
  const [lifeTime, setLifeTime] = useState(0);     //how old is the chicken?
  const [houseHeight, setHouseHeight] = useState(0);    //the size of animation
  const [houseWidth, setHouseWidth] = useState(0);      //the size of animation
  const [openChooseChicken, setOpenChooseChicken] = useState(false);  //open the choosechicken menu
  const [muted, setMuted] = useState(false);        //is the BGM muted?
  const [stage, setStage] = useState(0);            //evolution of chicken
  const [type, setType] = useState(0);              //type of chicken
  const [over, setOver] = useState(false);
  const houseRef = useRef();                        //house absolute position
  const classes = useStyles();                      //handle some style
  const logout = () => {
    sendLogOut(user);
  }

  // listen incoming wsMessage
  useEffect(() => {
    console.log(`Incomming message: { type: ${wsmessage.type}, value: ${wsmessage.value}`)
    switch(wsmessage.type) {
      case 'lifetime':
          console.log(lifeTime);
          if(stage != 3){
            setLifeTime(wsmessage.value);
          }
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

  useEffect(async() => {
    const data = await getUser();
    console.log('data:' , data, window.localStorage.getItem("account"))
    if(data.length === 0){
      setUser(window.localStorage.getItem("account"));
      console.log('hewkfhewifeiwlvjil:' , data, user)
      setHealth(100);
      setHappiness(100);
      setHunger(90);
      setStage(0);
      setOpenChooseChicken(true);
      
    }else {
    console.log("data ", data[0])
    
    setOpenChooseChicken(false);
      setUser(data[0].account);
      setHealth(data[0].health);
      setHappiness(data[0].happiness);
      setHunger(data[0].hunger);
      setType(data[0].name);
      setStage(data[0].stage);
      sendGameStart(user);
    }
  },[user])
  const create = async() => {
    console.log("typeeeee", type)
    console.log("user: ", user)
    await createChick({account: user, name: type});
    sendGameStart(user);
  }
  //handle the BGM playing(invisible without 'controls' in <audio>)
  
  useEffect(() => {
    if(!muted)
    playMusic();
    else
    pauseMusic();
  },[muted])

  // listen window resize event
  useEffect(() => {
    if(stage == 3){
      //run game over
    }
  },[stage])
console.log("type: ", type)
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
      <ChooseChicken openChooseChicken={openChooseChicken} setType={setType} type={type} create={create} user={user}/> 
  <Monitor user={user} health={health} hunger={hunger} happiness={happiness} setMuted={setMuted} muted={muted} type={type} stage={stage} lifeTime={lifeTime} logout={logout} />
      
      <Grid className="visual_block">
        <Grid className="house" onClick={onClickScreen} ref={houseRef}>
          <GameOver over={over} stage={stage} restart={restart} lifeTime= {lifeTime}/>
          <Chicken height={houseHeight} width={houseWidth} foodpos={foodpos} setFoodPos={setFoodPos} health={health} user={user} hunger={hunger} happiness={happiness} setHealth={setHealth} setHunger={setHunger} setHappiness={setHappiness} setStage={setStage} stage={stage} type={type}/>
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

