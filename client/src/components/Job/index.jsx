import React from 'react';
import {Div,Line,H4 } from './style'

export const Job = ({job}) => {
    return(
      <>
      <Div>
        <H4>{job.title}</H4>
        <H4>{job.company}</H4>
        <H4>{job.position}</H4>
      </Div>  
      <Line> </Line>
      </>
    );
}