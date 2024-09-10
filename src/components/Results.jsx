import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../Contexts/ResultContextProvider';
import Loading from './Loading';

const Results = () => {

  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  if (isLoading) return <Loading />
  return (
    <div>Results</div>
  )
}

export default Results