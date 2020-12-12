import './App.css'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import React, { useEffect, useRef, useState } from 'react'
import meow from "./img/ahhmeow.jpg"
var x = "menu"
var mode = "setting"

const container_swi = (mode) => {
  switch (mode) {
    case 'login':
      break
    case 'play':
      return(
        <>
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
            <img className="moni_setting" src="https://www.flaticon.com/svg/static/icons/svg/1242/1242392.svg"/>
          </div>
          <div className="visual_block">
            <div className="house">house</div>
            <div className="interaction">
              {interaction_swi(x)}
            </div>
          </div>
        </>
      )
    case 'setting':
      return(
        <>
          <div className="set_data">
            <div className="set_property">
              <img className="set_user_icon" src="https://www.flaticon.com/svg/static/icons/svg/64/64572.svg"/>
              <span className="set_user_word">user001</span>
              <img className="set_property_icon" src="https://www.flaticon.com/svg/static/icons/svg/3039/3039367.svg"/>
              <ul className="set_property_list"></ul>
            </div>
            <div className="set_pet">
              <img className="set_pet_pic" src={meow}/>
              <span className="set_pet_name">QQㄋㄟㄋㄟ咩噗怪</span>
            </div>
          </div>
          <div className="set_mute">
            <img className="set_mute_icon" src="https://www.flaticon.com/svg/static/icons/svg/727/727240.svg"/>
            <input className="set_mute_button" type="checkbox"/>
          </div>
          <div className="set_button_area">
          <Link to="/">
              <button classNameName="set_logout">Log out</button>
            </Link>
          <button className="set_back">back</button>
          </div>
        </>
      )
      }}
          


const interaction_swi = (inter) => {
  switch (inter) {
    case 'menu':
      return(
        <>
          <img className="int_icon" src="https://www.flaticon.com/svg/static/icons/svg/3720/3720844.svg"/>
          <img className="int_icon" src="https://www.flaticon.com/svg/static/icons/svg/2855/2855450.svg"/>
          <img className="int_icon" src="https://www.flaticon.com/svg/static/icons/svg/808/808439.svg"/>
        </>
      )
    case 'food':
      return(
        <>
          <div className="int_choose">food1</div>
          <div className="int_choose">food2</div>
          <div className="int_choose">food3</div>
          <div className="int_choose">food4</div>
          <div className="int_choose">back</div>
        </>
      )
    case 'bath':
      return(
        <>
          <div className="int_choose">bath1</div>
          <div className="int_choose">bath2</div>
          <div className="int_choose">bath3</div>
          <div className="int_choose">bath4</div>
          <div className="int_choose">back</div>
        </>
      )
    case 'play':
      return(
        <>
          <div className="int_choose">play1</div>
          <div className="int_choose">play2</div>
          <div className="int_choose">play3</div>
          <div className="int_choose">play4</div>
          <div className="int_choose">back</div>
        </>
      )
  }
}
function Game() {
  return (
    <div className="container">
      {container_swi(mode)}
    </div>
  )
}

export default Game;
