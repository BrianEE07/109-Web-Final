import React, { useEffect } from 'react';
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
    console.log("props: ", props)
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
  
const ChooseChicken = (props) => {
    const [open, setOpen] = React.useState(props.openChooseChicken);
    // const setType = props.setType;
    console.log("props.typel: ", props)
    console.log("open: ", open)
    useEffect(() => {
      setOpen(props.openChooseChicken)
    }, [props.openChooseChicken])
    const handleClose = () => {
        props.create();
        setOpen(false);
    };
    // const setType = (num) => {
    //   console.log(num)
    //   props.setType(num)
    // }
    function handleChicken(choice){
      console.log("choice", choice)
        if(choice == 0){
            return('黃色的看甚麼看')
        }
        else if(choice == 1){
            return('藍色的還敢下來阿')
        }
        else if(choice == 2){
            return('白色的俺在飛呀')
        }
    }

    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Your choice is {handleChicken(props.type)}
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        看甚麼看
                    </Typography>
                    <Button onClick={() => {props.setType(0);console.log("this is o",props.type)}}> 我偏要看</Button><br/>
                    <Typography gutterBottom>
                        還敢下來阿
                    </Typography>
                    <Button onClick={() => props.setType(1)}>我就要下來</Button><br/>
                    <Typography gutterBottom>
                        我在飛呀
                    </Typography>
                    <Button onClick={() => props.setType(2)}>飛你個頭</Button><br/>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={props.create} color="primary">
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
  }
  export default ChooseChicken;
