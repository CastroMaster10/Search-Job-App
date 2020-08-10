import React, { useEffect, useState } from 'react';
import './App.css';
import {ListJobs} from './components/ListJobs'

const API_URL = 'http://localhost:3001/jobs'

const FetchJobs = async (updateCb) => {
  const res = await fetch(API_URL)
  const json = await res.json();
  updateCb(json)
}

function App() {

  const [jobs, updateJobs] = useState([]);

  const mockJobs = [
    { title: 'Software developer', company: "Google", position: "manager" },
    { title: 'Software developer', company: "Google", position: "manager" },
    { title: 'Software developer', company: "Google", position: "manager" }
  ];

  useEffect(() => {
    FetchJobs(updateJobs);
  }, [])

  return (
    <>
    <ListJobs jobs= {jobs}/>
    </> 
  );
}

export default App;
