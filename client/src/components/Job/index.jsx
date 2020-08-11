import React from 'react';
import {Div, SubDiv} from './style'


export const Job = ({job, onClick}) => {
  
  

    return(
      <>
      <Div onClick= {onClick}>
        <div>
          <h5>{job.type}</h5>
          <h3>{job.title}</h3>
          <p>{job.location}</p>
        </div>
        <div></div>  
        <SubDiv>
            <div>

            </div>
            <p>{job.created_at.split(' ').slice(0, 4).join(' ')}</p>
            <div></div>
        </SubDiv>
      </Div>  
        
      </>
    );
}