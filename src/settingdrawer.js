import React from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import LiveHelpOutlinedIcon from '@material-ui/icons/LiveHelpOutlined';
import yellowbird_1 from './img/mychicken/mychicken1.png';
import icebird_1 from './img/icebird/icebird1.png';
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
  
const SettingDrawer = (props) => {
    const [open, setOpen] = React.useState(false);
    // 0 1 2 middle 3 4 5 big 6 small
    const petpic = [yellowbird_1, icebird_1];
    const petName = ['詠為黃色雞雞', '書睿超屌冰鳥', '宏軒胖胖鳥鳥'];
    const petHeight = [];
    const petWeight = [];
    const petpersonality = [];
    const petstage = [];
    const petstageproperty = ['', '', '', '很笨很臭', '冰雪世界的貴族鳥類，擁有不凡的魔法力量，可以發射冰球。', '', '', '', ''];
    
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
        <Button color="secondary" onClick={handleClickOpen} className="moni_setting" size='medium' startIcon={< LiveHelpOutlinedIcon/>}>
          Imformation
        </Button>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            imformation of {props.user}'s GG
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
                <img src={petpic[props.type]} width="30%" height="30%"/><br/>
                GG名: {petName[props.type]}<br/>
                身高: {petHeight} cm<br/>個性: {petpersonality}<br/>       
                體重: {petWeight} kg<br/>
                已存活時間: {props.lifeTime}s
            </Typography>
            <Typography gutterBottom>
                狀態: {petName[props.type]}{petstage[props.stage]}! <br/>
                介紹: {(props.stage == 0)? petstageproperty[9]:petstageproperty[props.type + 3*props.stage]}
            </Typography>
            <Typography gutterBottom>
              "媽的智障鳥鳥"
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={props.logout} color="primary">
              Log out
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  export default SettingDrawer;