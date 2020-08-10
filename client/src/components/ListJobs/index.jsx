import React from 'react';
import { Typography } from '@material-ui/core';
import {Job} from '../Job'
import {Div} from './style';

export const ListJobs = ({jobs}) => {
    return(
        <Div>
        <Typography variant='h1'>Job searching</Typography>
        {
            jobs.map(job => {
               return <Job job = {job}/>
            })
        }
       
        </Div>
    );
}