import './App.css'
import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RedditIcon from '@material-ui/icons/Reddit';
import PhoneIcon from '@material-ui/icons/Phone';
import BathtubIcon from '@material-ui/icons/Bathtub';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import { makeStyles } from '@material-ui/core/styles';
import {red, purple, pink, blue} from '@material-ui/core/colors';
import TabPanel from "./tabpanel"
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from 'material-ui/Paper';
//import {Animate, useAnimateKeyframes, useAnimateGroup } from "react-simple-animate"
import stickman1 from "./img/stickman1.jpg";
import EEGG from "./img/electricalGG.png";
import { Icon } from '@material-ui/core';

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function Game() {
  const [inter, setInter] = useState('menu')
  const [tabValue, setTabValue] = useState(0);
  const useStyles = makeStyles({
    icon:{
      height: '20%',
      width: '90%',
      boxShadow: '0 3px 5px 2px black',
      justify: 'center',
    },
    labelContainer: {
      paddingLeft: 0,
      paddingRight: 0
    }
  })
  const classes = useStyles();
  let tabStyle = {
    minWidth: 50,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "white",
    letterSpacing: "-.04em"
  }
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  /*
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
*/
  return (
    <div className="container">
      <Grid className="moniter">
        <img className="moni_logo" src={EEGG}/>
        <Grid className="moni_status">
          <FavoriteIcon className="moni_status_icon"/>
          <img className="moni_status_bar" src="https://www.flaticon.com/svg/static/icons/svg/40/40471.svg"/>
        </Grid>
        <Grid className="moni_status">
          <LocalHospitalIcon className="moni_status_icon"/>
          <img className="moni_status_bar" src="https://www.flaticon.com/svg/static/icons/svg/40/40471.svg"/>
        </Grid>
        <Grid className="moni_status">
          <RestaurantMenuIcon className="moni_status_icon"/>
          <img className="moni_status_bar" src="https://www.flaticon.com/svg/static/icons/svg/40/40471.svg"/>
        </Grid>
        <Link to="/setting">
          <Button>setting</Button>
        </Link>
      </Grid>
      <Grid className="visual_block">
        <Grid className="house">
          <Grid className="test_animation">
            <img src={stickman1} className="GG"  />
          </Grid>
        </Grid>
        <Grid className="interaction">
          {//interaction_swi(inter)}
            }
            <Tabs
              value={tabValue}
              onChange={handleChange}
              variant="fullWidth"
              indicatorColor="secondary"
              textColor="black"
              aria-label="icon label tabs example"
              centered
              width='100%'s
              maxWidth= '40'
            >
              <Tab icon={<BathtubIcon />} class={classes.labelContainer} style={tabStyle} label="Bath" {...a11yProps(0)}/>
              <Tab icon={<FavoriteIcon />} class={classes.labelContainer} style={tabStyle} label="Play" {...a11yProps(1)}/>
              <Tab icon={<RestaurantIcon/>} class={classes.labelContainer} style={tabStyle} label="Food" {...a11yProps(2)}/>
            </Tabs>
          <TabPanel value={tabValue} index={0}>
            洗澎澎
            洗洗洗
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <RedditIcon/>
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            吃飯飯
            吃吃吃
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  )
}

export default Game;
