import './App.css'
import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
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
import chicken from "./img/chicken.png";
import chicken2 from "./img/chicken2.png";
import ahhmeow from "./img/ahhmeow.jpg";
import { Icon } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Chicken from './chicken.js';

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
  const [user, setUser] = useState('范詠為')
  const [tabValue, setTabValue] = useState(0);
  const [life, setLife] = useState(100);
  const [hunger, setHunger] = useState(100);
  const [health, setHealth] = useState(100);
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
    },
    root: {
      width: '100%',
      maxWidth: 360,
    },
    padge:{
      right: -100,
      top: 100,
      padding: '10 40px',
    },
    list_img:{
      width: '30%',
      height: '100%'
    },
    chicken:{
      height: '80px',
      width: '80px'
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
  return (
    <div className="container_bg">
    <div className="container">
      <Grid className="moniter">
        <img className="moni_logo" src={chicken2}/>
        <div>This is {user}'s electric GG</div>
        <Grid className="moni_status">
          <FavoriteIcon className="moni_status_icon"/>
          <Grid className="moni_status_icon">{life}%</Grid>
          <img className="moni_status_bar" src="https://www.flaticon.com/svg/static/icons/svg/40/40471.svg"/>
        </Grid>
        <Grid className="moni_status">
          <LocalHospitalIcon className="moni_status_icon"/>
          <Grid className="moni_status_icon">{health}%</Grid>
          <img className="moni_status_bar" src="https://www.flaticon.com/svg/static/icons/svg/40/40471.svg"/>
        </Grid>
        <Grid className="moni_status">
          <RestaurantMenuIcon className="moni_status_icon"/>
          <Grid className="moni_status_icon">{hunger}%</Grid>
          <img className="moni_status_bar" src="https://www.flaticon.com/svg/static/icons/svg/40/40471.svg"/>
        </Grid>
        <Link to="/setting">
          <Button>setting</Button>
        </Link>
      </Grid>
      <Grid className="visual_block">
        <Grid className="house">
          <Chicken height="85%" width="75%"/>
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
              width='100%'
              maxWidth= '40'
            >
              <Tab icon={<BathtubIcon />} class={classes.labelContainer} style={tabStyle} label="Bath" {...a11yProps(0)}/>
              <Tab icon={<FavoriteIcon />} class={classes.labelContainer} style={tabStyle} label="Play" {...a11yProps(1)}/>
              <Tab icon={<RestaurantIcon/>} class={classes.labelContainer} style={tabStyle} label="Food" {...a11yProps(2)}/>
            </Tabs>
          <TabPanel value={tabValue} index={0}>
          <List component="nav" className={classes.root} aria-label="mailbox folders">
            <ListItem button>
              <LocalHospitalIcon/>
              <ListItemText primary="Inbox" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <img src = {ahhmeow} className={classes.list_img}/>
              <ListItemText primary="Kitty" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
          <List component="nav" className={classes.root} aria-label="mailbox folders">
            <ListItem button>
              <LocalHospitalIcon/>
              <ListItemText primary="I" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <img src = {ahhmeow} className={classes.list_img}/>
              <ListItemText primary="really really" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="love" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="you" />
            </ListItem>
          </List>
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
          <List component="nav" className={classes.root} aria-label="mailbox folders">
            <ListItem button>
              <LocalHospitalIcon/>
              <ListItemText primary="I" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <img src = {ahhmeow} className={classes.list_img}/>
              <ListItemText primary="Dont" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Like" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="You" />
            </ListItem>
          </List>
          </TabPanel>
        </Grid>
      </Grid>
    </div>
    </div>
  )
}

export default Game;
