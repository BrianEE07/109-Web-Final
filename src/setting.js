import './App.css'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import React, { useEffect, useRef, useState } from 'react'
import meow from "./img/ahhmeow.jpg"

function Setting() {
    return (
      <div className="container">
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
            <Link to="/game">
                <button className="set_back">back</button>
            </Link>
          </div>
      </div>
    )
  }
  
  export default Setting;