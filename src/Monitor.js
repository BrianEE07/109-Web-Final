import './App.css'
import React, { useEffect, useRef, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import SettingDrawer from './settingdrawer';
import chicken2 from "./img/monitor/chicken2.png";
import redbar_0 from "./img/status_bar/bar_0.png";
import redbar_10 from "./img/status_bar/redbar_10.png";
import redbar_20 from "./img/status_bar/redbar_20.png";
import redbar_30 from "./img/status_bar/redbar_30.png";
import redbar_40 from "./img/status_bar/redbar_40.png";
import redbar_50 from "./img/status_bar/redbar_50.png";
import redbar_60 from "./img/status_bar/redbar_60.png";
import redbar_70 from "./img/status_bar/redbar_70.png";
import redbar_80 from "./img/status_bar/redbar_80.png";
import redbar_90 from "./img/status_bar/redbar_90.png";
import redbar_100 from "./img/status_bar/redbar_100.png";
import bluebar_0 from "./img/status_bar/bar_0.png";
import bluebar_10 from "./img/status_bar/bluebar_10.png";
import bluebar_20 from "./img/status_bar/bluebar_20.png";
import bluebar_30 from "./img/status_bar/bluebar_30.png";
import bluebar_40 from "./img/status_bar/bluebar_40.png";
import bluebar_50 from "./img/status_bar/bluebar_50.png";
import bluebar_60 from "./img/status_bar/bluebar_60.png";
import bluebar_70 from "./img/status_bar/bluebar_70.png";
import bluebar_80 from "./img/status_bar/bluebar_80.png";
import bluebar_90 from "./img/status_bar/bluebar_90.png";
import bluebar_100 from "./img/status_bar/bluebar_100.png";
import purplebar from "./img/status_bar/purplebar.png";
import greenbar_0 from "./img/status_bar/bar_0.png";
import greenbar_10 from "./img/status_bar/greenbar_10.png";
import greenbar_20 from "./img/status_bar/greenbar_20.png";
import greenbar_30 from "./img/status_bar/greenbar_30.png";
import greenbar_40 from "./img/status_bar/greenbar_40.png";
import greenbar_50 from "./img/status_bar/greenbar_50.png";
import greenbar_60 from "./img/status_bar/greenbar_60.png";
import greenbar_70 from "./img/status_bar/greenbar_70.png";
import greenbar_80 from "./img/status_bar/greenbar_80.png";
import greenbar_90 from "./img/status_bar/greenbar_90.png";
import greenbar_100 from "./img/status_bar/greenbar_100.png";
const red = [redbar_0,redbar_10,redbar_20,redbar_30,redbar_40,redbar_50,redbar_60,redbar_70,redbar_80,redbar_90,redbar_100]
const blue = [bluebar_0,bluebar_10,bluebar_20,bluebar_30,bluebar_40,bluebar_50,bluebar_60,bluebar_70,bluebar_80,bluebar_90,bluebar_100,purplebar]
const green = [greenbar_0,greenbar_10,greenbar_20,greenbar_30,greenbar_40,greenbar_50,greenbar_60,greenbar_70,greenbar_80,greenbar_90,greenbar_100]

const Monitor = (props) => {
    const setMuted = props.setMuted;
    const muted = props.muted;
    function handleHungerStatus(hunger){
        if(hunger > 100){
            return(110);
        }
        else{
            return(hunger);
        }
    } 
    return(
        <Grid className="moniter">
            <img className="moni_logo" src={chicken2}/>

            <div className="moni_user">{props.user}, welcome!<br/> 
                your GG is now<br/>
                {props.lifeTime}s old
            </div>
            <Grid className="moni_status">
                <FavoriteIcon className="moni_status_icon"/>
            <Grid className="moni_status_icon">{props.health}%</Grid>
                <img className="moni_status_bar" src={red[props.health/10]}/>
            </Grid>
            <Grid className="moni_status">
                <InsertEmoticonIcon className="moni_status_icon"/>
            <Grid className="moni_status_icon">{props.happiness}%</Grid>
                <img className="moni_status_bar" src={green[props.happiness/10]} />
            </Grid>
            <Grid className="moni_status">
                <RestaurantMenuIcon className="moni_status_icon"/>
                <Grid className="moni_status_icon">{props.hunger}%</Grid>
                <img className="moni_status_bar" src={blue[handleHungerStatus(props.hunger)/10]}/>
            </Grid>
            <Grid className="moni_mute">
                <img className="moni_mute_icon" src="https://www.flaticon.com/svg/static/icons/svg/727/727240.svg"/>
                <input className="moni_mute_button" type="checkbox" onClick={() => setMuted(!muted)}/>
          </Grid>
            <SettingDrawer health={props.health} happiness={props.happiness} hunger={props.hunger} user={props.user} stage={props.stage} type={props.type} lifeTime={props.lifeTime} logout={props.logout} />
        </Grid>
    )
}

export default Monitor;