import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {Img,Figure} from './style';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const JobModal = ({ job, open, handleClose   }) => {

    if(!job.title){
        return(<div></div>)
    }
   

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Description"}</DialogTitle>
               
                <DialogContent>
                    <Figure>
                        <Img src={job.company_logo} />
                    </Figure>
                    <DialogContentText id="alert-dialog-slide-description" dangerouslySetInnerHTML = {{__html: job.description}}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} href= {job.url} target= '_blank' color="primary">
                        Apply
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}