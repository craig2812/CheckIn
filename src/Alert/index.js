import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./Alert.css"

function AlertDialog({time, checkedInOut, name, buttonText, submit}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };  

let disableToggle = time.length<10 ? false : true

let dialogue = time.length<10 ? (<p>Hi {name}... you are about to <b>{buttonText}</b> and set your shift {checkedInOut === "In" ? "start" : "end"} time as <b>{time}</b>. <br/> If correct click {buttonText}, if not please cancel!</p>) : `${name}... You need to select a time to ${buttonText}`

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{backgroundColor:"#80d95f", color: 'black'}}>
      {`Click to ${buttonText}`}</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Please Double Check your Time</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"> 
           {dialogue}
                           </DialogContentText>
        </DialogContent>
        <DialogActions style={{display:'grid', gridTemplateColumns:"1fr 1fr"}}>
          <Button onClick={handleClose} className="cancelButton">
            cancel
          </Button>
          <Button onClick={submit} className="submitButton" autoFocus disabled={disableToggle}>
          {buttonText}
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    )
}

export default AlertDialog;
