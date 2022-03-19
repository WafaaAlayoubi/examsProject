import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    newPosOfDialog: {
        position: "absolute",
        top: "15%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }
  }));

const PopUp = () => {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
  return (
    <div>

        <Button variant="contained" style={{backgroundColor:'#5378C9',color:"white"}} onClick={handleClickOpen} startIcon={<AddIcon />}>
         Create New
        </Button>

        <Dialog classes={{
            paper: classes.newPosOfDialog}}
            open={open} 
            onClose={handleClose} 
            aria-labelledby="form-dialog-title" 
            fullWidth
            maxWidth="sm" >

            <DialogTitle id="form-dialog-title">Create New Skill</DialogTitle>

            <Divider />

            <DialogContent>
                <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Title"
                type="text"
                fullWidth
                />
            </DialogContent>

            <Divider />

            <DialogActions>
                <Button
                onClick={handleClose}
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<CloseIcon />}
                >
                Cancle
                </Button>
                
                <Button
                variant="contained"
                style={{backgroundColor:'#5378C9',color:"white"}}
                onClick={handleClose}
                className={classes.button}
                startIcon={<SaveIcon />}
                >
                Save
                </Button>
            </DialogActions>

        </Dialog>
    </div>
  )
}

export default PopUp