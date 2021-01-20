import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import deadchicken from './img/deadchicken/deadchicken.png';
const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(5),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(1),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(5),
    },
  }))(MuiDialogActions);

const GameOver = (props) => {
    const [open, setOpen] = React.useState(false);
        useEffect(() => {
            if(props.stage == 3)
            setOpen(true)
        },[props.stage])
    const handleClose = () => {
      setOpen(open);
    };
  
    return (
      <div>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            真的GG啦
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
                <img src={deadchicken} width="30%" height="30%"/><br/>
                Game Over!!<br/>
                You bird has lived for {props.lifeTime}s.
            </Typography>
            <Typography gutterBottom>
              "可憐哪"
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={() => { setOpen(false);props.setOpenChooseChicken(true);}} color="secondary"><br/>
              Select a new chicken!
            </Button>
          </DialogActions>
          <DialogActions>
            <Link to='/login'>
              <Button autoFocus color="primary">
                Restart!
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  export default GameOver;