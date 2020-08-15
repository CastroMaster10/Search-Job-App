import React, { useEffect, useState } from 'react';

import {ListJobs} from './components/ListJobs'

const API_URL = 'https://api-search-app.castromaster10.vercel.app'


function App() {

  const [jobs, updateJobs] = useState([]);
  const [error,updateError] = useState(false)

  useEffect( () => {
  const Fetching = async () => {
    try {
      const res = await fetch(API_URL)
      const json = await res.json();
      updateJobs(json)
      console.log({json})
    } catch (error) {
      console.log('There was an error,', error)
      updateError(true)
    }
  }
  Fetching();
  }, [])

  return (
    <>
    <ListJobs jobs= {jobs} catchingError = {error}/>
    </> 
  );
}

export default App;
