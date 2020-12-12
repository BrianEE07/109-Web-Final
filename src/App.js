import logo from './logo.svg';
import './App.css'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Game from './game.js'
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import React, { useEffect, useRef, useState , Component} from 'react'

const useStyles = () => {
    // un: { 
    //     width: "76%",
    //     color: "rgb(38, 50, 56)",
    //     font-weight: 700,
    //     font-size: 14px,
    //     letter-spacing: 1px,
    //     background: rgba(136, 126, 126, 0.04),
    //     padding: 10px 20px,
    //     border: none,
    //     border-radius: 20px,
    //     outline: none,
    //     box-sizing: border-box,
    //     border: 2px solid rgba(0, 0, 0, 0.02),
    //     margin-bottom: 50px,
    //     margin-left: 46px,
    //     text-align: center,
    //     margin-bottom: 27px,
    //     font-family: 'Ubuntu', sans-serif,
        
    // }
}
function App() {


    return(
      <div>
        <Input placeholder="username"></Input>
        <br></br>
        <Input placeholder="password">
        <br></br>
        </Input>
        <Link to="/game">
          <button> Login </button>
        </Link>
      </div>
    )

}

export default App;
