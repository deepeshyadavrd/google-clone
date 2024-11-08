import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../Contexts/ResultContextProvider';
import Loading from './Loading';

const Results = () => {

  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

    useEffect(() => {
      getResults('?query=Javascript Mastery&limit=10')
    }, []);
  if (isLoading) return <Loading />
  
  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {results?.results?.map( ({ url, title }, index)=>(
            <div key={index} className='md:w-2/5 w-full'>
              <a href={url} target="_blank" rel="noreferrer">
                <p className='text-sm'>
                  {url.length > 30 ? url.substring(0, 30) : url}
                </p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                  {title}

                </p>
              </a>
            </div>
          ))}
        </div>
      )
    case '/images':
      return (
        <div className='flex flex-wrap justify-center items-center'>
          {results?.image_results?.map(({ image, link: { href, title}}, index) => (
            <a className='sm:p-3 p-5' href={href} key={index} target="_blank" rel="noreferrer">
              <img src={image?.src} alt={title} loading="lazy" />
              <p className='w-36 break-words text-sm mt-2'>
                {title}
              </p>
            </a>
          ))}
        </div>
      )
    case '/news':
      return 'SEARCH';
    case '/videos':
      return 'SEARCH';
  
    default:
      return 'ERROR';
  }
}

export default Results