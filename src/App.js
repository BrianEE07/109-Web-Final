import './App.css'
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
          <div class="moniter">
            <div class="moni_name">QQㄋㄟㄋㄟ咩噗怪</div>
            <div class="moni_status">
              <img class="moni_status_icon" src="https://www.flaticon.com/svg/static/icons/svg/833/833472.svg"/>
              <img class="moni_status_bar" src="https://www.flaticon.com/svg/static/icons/svg/40/40471.svg"/>
            </div>
            <div class="moni_status">
              <img class="moni_status_icon" src="https://www.flaticon.com/svg/static/icons/svg/3721/3721710.svg"/>
              <img class="moni_status_bar" src="https://www.flaticon.com/svg/static/icons/svg/40/40471.svg"/>
            </div>
            <div class="moni_status">
              <img class="moni_status_icon" src="https://www.flaticon.com/svg/static/icons/svg/83/83410.svg"/>
              <img class="moni_status_bar" src="https://www.flaticon.com/svg/static/icons/svg/40/40471.svg"/>
            </div>
            <img class="moni_setting" src="https://www.flaticon.com/svg/static/icons/svg/1242/1242392.svg"/>
          </div>
          <div class="visual_block">
            <div class="house">house</div>
            <div class="interaction">
              {interaction_swi(x)}
            </div>
          </div>
        </>
      )
    case 'setting':
      return(
        <>
          <div class="set_data">
            <div class="set_property">
              <img class="set_user_icon" src="https://www.flaticon.com/svg/static/icons/svg/64/64572.svg"/>
              <span class="set_user_word">user001</span>
              <img class="set_property_icon" src="https://www.flaticon.com/svg/static/icons/svg/3039/3039367.svg"/>
              <ul class="set_property_list"></ul>
            </div>
            <div class="set_pet">
              <img class="set_pet_pic" src={meow}/>
              <span class="set_pet_name">QQㄋㄟㄋㄟ咩噗怪</span>
            </div>
          </div>
          <div class="set_mute">
            <img class="set_mute_icon" src="https://www.flaticon.com/svg/static/icons/svg/727/727240.svg"/>
            <input class="set_mute_button" type="checkbox"/>
          </div>
          <button class="set_logout">Log out</button>
        </>
      )
  }
}

const interaction_swi = (inter) => {
  switch (inter) {
    case 'menu':
      return(
        <>
          <img class="int_icon" src="https://www.flaticon.com/svg/static/icons/svg/3720/3720844.svg"/>
          <img class="int_icon" src="https://www.flaticon.com/svg/static/icons/svg/2855/2855450.svg"/>
          <img class="int_icon" src="https://www.flaticon.com/svg/static/icons/svg/808/808439.svg"/>
        </>
      )
    case 'food':
      return(
        <>
          <div class="int_choose">food1</div>
          <div class="int_choose">food2</div>
          <div class="int_choose">food3</div>
          <div class="int_choose">food4</div>
          <div class="int_choose">back</div>
        </>
      )
    case 'bath':
      return(
        <>
          <div class="int_choose">bath1</div>
          <div class="int_choose">bath2</div>
          <div class="int_choose">bath3</div>
          <div class="int_choose">bath4</div>
          <div class="int_choose">back</div>
        </>
      )
    case 'play':
      return(
        <>
          <div class="int_choose">play1</div>
          <div class="int_choose">play2</div>
          <div class="int_choose">play3</div>
          <div class="int_choose">play4</div>
          <div class="int_choose">back</div>
        </>
      )
  }
}
function App() {
  return (
    <div class="container">
      {container_swi(mode)}
    </div>
  )
}

export default App;
