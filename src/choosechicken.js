// import React from 'react';
// import './App.css';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
// import Typography from '@material-ui/core/Typography';
// import icebird from './img/icebird/icebird1.png'
// const styles = (theme) => ({
//     root: {
//       margin: 0,
//       padding: theme.spacing(5),
//     },
//     closeButton: {
//       position: 'absolute',
//       right: theme.spacing(1),
//       top: theme.spacing(1),
//       color: theme.palette.grey[500],
//     },
//   });

//   const DialogTitle = withStyles(styles)((props) => {
//     const { children, classes, onClose, ...other } = props;
//     return (
//       <MuiDialogTitle disableTypography className={classes.root} {...other}>
//         <Typography variant="h6">{children}</Typography>
//         {onClose ? (
//           <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
//             <CloseIcon />
//           </IconButton>
//         ) : null}
//       </MuiDialogTitle>
//     );
//   });
  
//   const DialogContent = withStyles((theme) => ({
//     root: {
//       padding: theme.spacing(1),
//     },
//   }))(MuiDialogContent);
  
//   const DialogActions = withStyles((theme) => ({
//     root: {
//       margin: 0,
//       padding: theme.spacing(5),
//     },
//   }))(MuiDialogActions);
  
// const ChooseChicken = (props) => {
//     const [open, setOpen] = React.useState(props.openChooseChicken);
  

//     const handleClose = () => {
//         create();
//         setOpen(false);
//     };
    
//     const icebird = () => {
//         props.setType(2);
//     }

//     return (
//       <div>
//         <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
//           <DialogTitle id="customized-dialog-title" onClose={handleClose}>
//             imformation of 范詠為的GG
//           </DialogTitle>
//           <DialogContent dividers>
//             <Typography gutterBottom>
//                 <img src={icebird} width="30%" height="30%"/><br/>
//                 寵物名: 范詠為GG<br/>興趣: 看電視、不知道<br/>
//                 身高: 180 cm<br/>個性: 雞雞歪歪<br/>       
//                 體重: 65 kg<br/>
//             </Typography>
//             <Typography gutterBottom>
//                 品種: 冰鳥! <br/>
//                 介紹: 冰雪世界的貴族鳥類，擁有不凡的魔法力量，可以發射冰球。
//             </Typography>
//             <Typography gutterBottom>
//               哀呀
//             </Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button autoFocus onClick={icebird} color="secondary">
//               我愛冰鳥啦
//             </Button>
//             <Button autoFocus onClick={handleClose} color="primary">
//               Save changes
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     );
//   }
//   export default ChooseChicken;