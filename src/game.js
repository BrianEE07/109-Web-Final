import './App.css'
import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react'
import {divStyle, buttonStyle} from "./style"
import {Animate, useAnimateKeyframes, useAnimateGroup } from "react-simple-animate"
import stickman0 from "./img/stickman0.jpg"
import stickman1 from "./img/stickman1.jpg"
import stickman2 from "./img/stickman2.jpg"
import { AvPause } from 'material-ui/svg-icons';

function Game() {
  const [paused, setPaused] = useState(false)
  const [inter, setInter] = useState('menu')
  const { play, style, isPlaying } = useAnimateKeyframes({
    iterationCount: "infinite",
    direction: "alternate",
    duration: 3,
    play: true,
    pause: paused,
    keyframes: [
      "transform: skewX(-5deg) translateY(0px) translateX(0px)",
      "transform: skewX(5deg) translateY(10px) translateX(20px)",
      "transform: skewX(-5deg) translateY(0px) translateX(40px)",
      "transform: skewX(5deg) translateY(10px) translateX(60px)",
      "transform: skewX(-5deg) translateY(0px) translateX(80px)",
      "transform: skewX(5deg) translateY(10px) translateX(100px)",
      "transform: skewX(-5deg) translateY(0px) translateX(120px)",
      "transform: skewX(5deg) translateY(10px) translateX(140px)",
      "transform: skewX(-5deg) translateY(0px) translateX(160px)",
      "transform: skewX(5deg) translateY(10px) translateX(180px)",
      "transform: skewX(-5deg) translateY(0px) translateX(200px)",
      "transform: skewX(5deg) translateY(10px) translateX(220px)"
    ]
  });

  const interaction_swi = (inter) => {
    switch (inter) {
      case 'menu':
        return(
          <>
            <img className="int_icon" onClick={() => {setInter('food')}} src="https://www.flaticon.com/svg/static/icons/svg/3720/3720844.svg"/>
            <img className="int_icon" onClick={() => {setInter('bath')}} src="https://www.flaticon.com/svg/static/icons/svg/2855/2855450.svg"/>
            <img className="int_icon" onClick={() => {setInter('play')}} src="https://www.flaticon.com/svg/static/icons/svg/808/808439.svg"/>
          </>
        )
      case 'food':
        return(
          <>
            <div className="int_choose">food1</div>
            <div className="int_choose">food2</div>
            <div className="int_choose">food3</div>
            <div className="int_choose">food4</div>
            <div className="int_choose" onClick={() => {setInter('menu')}}>back</div>
          </>
        )
      case 'bath':
        return(
          <>
            <div className="int_choose">bath1</div>
            <div className="int_choose">bath2</div>
            <div className="int_choose">bath3</div>
            <div className="int_choose">bath4</div>
            <div className="int_choose" onClick={() => {setInter('menu')}}>back</div>
          </>
        )
      case 'play':
        return(
          <>
            <div className="int_choose">play1</div>
            <div className="int_choose">play2</div>
            <div className="int_choose">play3</div>
            <div className="int_choose">play4</div>
            <div className="int_choose" onClick={() => {setInter('menu')}}>back</div>
          </>
        )
    }
  }
  return (
    <div className="container">
      <div className="moniter">
        <div className="moni_name">QQㄋㄟㄋㄟ咩噗怪</div>
        <div className="moni_status">
          <img className="moni_status_icon" src="https://www.flaticon.com/svg/static/icons/svg/833/833472.svg"/>
          <img className="moni_status_bar" src="https://www.flaticon.com/svg/static/icons/svg/40/40471.svg"/>
        </div>
        <div className="moni_status">
          <img className="moni_status_icon" src="https://www.flaticon.com/svg/static/icons/svg/3721/3721710.svg"/>
          <img className="moni_status_bar" src="https://www.flaticon.com/svg/static/icons/svg/40/40471.svg"/>
        </div>
        <div className="moni_status">
          <img className="moni_status_icon" src="https://www.flaticon.com/svg/static/icons/svg/83/83410.svg"/>
          <img className="moni_status_bar" src="https://www.flaticon.com/svg/static/icons/svg/40/40471.svg"/>
        </div>
        <Link to="/setting">
          {//<img className="moni_setting" src="https://www.flaticon.com/svg/static/icons/svg/1242/1242392.svg"/>
          }
          setting
        </Link>
      </div>
      <div className="visual_block">
        <div className="house">
          <div className="test_animation">
            <img src={stickman1} className="GG" style={style} />
          </div>
          <button 
            style={buttonStyle}
            onClick={() => {
              play(!isPlaying)
            }              
            }
          >
            play
          </button>
        </div>
        <div className="interaction">
          {interaction_swi(inter)}
        </div>
      </div>
    </div>
  )
}

export default Game;