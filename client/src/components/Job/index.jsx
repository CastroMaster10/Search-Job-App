import React from 'react';
import {Div, SubDiv} from './style'

export const Job = ({job}) => {


    return(
      <>
      <Div>
        <div>
          <h5>{job.type}</h5>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
        </div>
        <div></div>  
        <SubDiv>
          <div></div>
          <p>{job.created_at.split(' ').slice(0, 4).join(' ')}</p>
        </SubDiv>
      </Div>  
      </>
    );
}