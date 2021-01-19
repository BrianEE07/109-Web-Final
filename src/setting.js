import './setting.css'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import chicken from "./img/setting/icebird3.png";
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Setting() {
    const[chickenName, setChickenName] = useState("冰鳥還敢下來阿");
    return (
      <Grid className="container_bg">
      <Grid className="container_set">
        <Grid className="set_data">
            <Grid className="set_property">
              <img className="set_user_icon" src="https://www.flaticon.com/svg/static/icons/svg/64/64572.svg"/>
              <Grid className="set_user_word"></Grid>
              <img className="set_property_icon" src="https://www.flaticon.com/svg/static/icons/svg/3039/3039367.svg"/>
              <ul className="set_property_list">
                <Grid>opopopopo</Grid>
              </ul>
            </Grid>
            <Grid className="set_pet">
              <img className="set_pet_pic" src={chicken}/>
              <Grid className="set_pet_name">{chickenName}</Grid>
            </Grid>
          </Grid>
          <Grid className="set_mute">
            <img className="set_mute_icon" src="https://www.flaticon.com/svg/static/icons/svg/727/727240.svg"/>
            <input className="set_mute_button" type="checkbox"/>
          </Grid>
          <Grid className="set_button_area">
            <Link to="/game">
            <Button
                variant="contained"
                color="primary"
                startIcon={<ArrowBackIcon />}
                className="set_back_button"
              >
                Back
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant="contained"
                color="primary"
                startIcon={<ExitToAppIcon />}
              >
                Log_out
              </Button>
            </Link>
          </Grid>
      </Grid>.
      </Grid>
    )
  }
  
  export default Setting;