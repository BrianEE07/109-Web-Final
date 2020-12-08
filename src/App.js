import './App.css'
import React, { useEffect, useRef, useState } from 'react'
var x = "food"
var mode = "play"

const container_swi = (mode) => {
  switch (mode) {
    case 'login':
      break
    case 'play':
      return(
        <>
          <div class="moniter">
            <div class="moni_name">name</div>
            <div class="moni_status">happiness</div>
            <div class="moni_status">health</div>
            <div class="moni_status">hunger</div>
            <div class="moni_setting">setting</div>
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
              <img class="set_user_icon"/>
              <span class="set_user_word">user001</span>
              <img class="set_property_icon"/>
              <ul class="set_property_list"></ul>
            </div>
            <div class="set_pet">
              <img class="set_pet_pic"/>
              <span class="set_pet_name">name</span>
            </div>
          </div>
          <div class="set_mute">
            <img class="set_mute_icon"/>
            <input class="set_mute_button"/>
          </div>
          <button></button>
        </>
      )
  }
}

const interaction_swi = (inter) => {
  switch (inter) {
    case 'menu':
      return(
        <>
          <div class="int_icon">food</div>
          <div class="int_icon">bath</div>
          <div class="int_icon">play</div>
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
