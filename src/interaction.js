import './App.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ahhmeow from "./img/interaction/ahhmeow.jpg";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const Interaction = (props) => {
    const classes = props.classes;
    return(
        <Grid className="interaction">
          <List component="nav" className={classes.root} aria-label="mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <LocalHospitalIcon/>
              </ListItemIcon>
              <ListItemText primary="Super good food" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <img src = {ahhmeow} className={classes.list_img}/>
              <ListItemText primary="My cat can spin backward" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FavoriteIcon/>
              </ListItemIcon>
              <ListItemText primary="Play with the chick" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Nothing here" />
            </ListItem>
          </List>
        </Grid>
    )
} 
export default Interaction;