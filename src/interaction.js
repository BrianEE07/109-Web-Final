import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BathtubIcon from '@material-ui/icons/Bathtub';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import TabPanel from "./tabpanel";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ahhmeow from "./img/interaction/ahhmeow.jpg";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


let tabStyle = {
  height: '100%',
  paddingLeft: 0,
  paddingRight: 0,
  backgroundColor: "white",
  letterSpacing: "-.04em"
}
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}
const Interaction = (props) => {
    const classes = props.classes;
    const tabValue = props.tabValue;
    const setTabValue = props.setTabValue;
    return(
        <Grid className="interaction">
            <Tabs
              value={tabValue}
              variant="fullWidth"
              indicatorColor="secondary"
              textColor="black"
              aria-label="icon label tabs example"
              centered
              selected
              width='100%'
            >
              <Tab onClick={()=>setTabValue(0)} icon={<BathtubIcon />} class={classes.labelContainer} style={tabStyle} label="Bath" {...a11yProps(0)}/>
              <Tab onClick={()=>setTabValue(1)} icon={<FavoriteIcon />} class={classes.labelContainer} style={tabStyle} label="Play" {...a11yProps(1)}/>
              <Tab onClick={()=>setTabValue(2)} icon={<RestaurantIcon/>} class={classes.labelContainer} style={tabStyle} label="Food" {...a11yProps(2)}/>
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
    )
} 
export default Interaction;