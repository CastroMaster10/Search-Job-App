import React from 'react';
import { Typography } from '@material-ui/core';
import {Job} from '../Job'
import {Div} from './style';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'; 
import {JobModal} from '../JobModal'
import { useState } from 'react';


const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
});







export const ListJobs = ({jobs}) => {

    const [activeStep, setActiveStep] = React.useState(0);
    const [selectedJob, selectJob] = useState({})  //this is a way to save the data from the api and manipulated inside the JobModal component
    const classes = useStyles();
    const theme = useTheme();
    const numJobs = jobs.length
    const numPages = Math.ceil(numJobs / 50)
  

    const NumCurrentPage = jobs.slice((activeStep * 50), (activeStep * 50) + 50)

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    //modal
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    

    console.log('Jobs:', jobs[0]);

    return(
        <Div>
        <JobModal open= {open} job= {selectedJob} handleClose = {handleClose} />
        <Typography variant='h3' component='h1'>Job searching for Jr. developers</Typography>
        <Typography variant='p' component='p'> Found {numJobs}</Typography>
        {
            NumCurrentPage.map((job, l) => {
               return(<Job key ={l} job = {job} onClick= {() => {
                   handleClickOpen();
                   selectJob(job)
               }}/>)
            })
        }
        <div style = {{margin: 'auto' }}>

        <small>
            Page {activeStep + 1} of {numPages}
        </small>
            <MobileStepper
                variant="dots"
                steps={Math.ceil(numJobs / 50)}
                position="static"
                activeStep={activeStep}
                className={classes.root}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === (numPages - 1)}>
                        Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
        </Button>
                }
            />
        </div>
    </Div>
    );
}