import React from 'react';
import { Typography } from '@material-ui/core';
import {Div,Img} from './style';
import noJobsFoundImg from '../../assets/no_jobs_found.jpg'

export const NoJobsFound = () => {

    return(
        <Div>
        <Typography variant='h3' component='h1'>Job searching for Jr. developers</Typography>
        <Typography variant='small' component= 'h2' F>No Jobs were found... 🙁</Typography>
        <Img src= {noJobsFoundImg}/>
        </Div>
    );
}  