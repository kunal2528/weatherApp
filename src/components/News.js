import React from 'react';
import '../styles/News.css';

function News({src, headline}) {
  return (
    <div className='news'>
      <img src={src} alt='news' />
      <p>{headline}</p>
      <div className='overlayText'>
        <div className='text'>
          <button>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default News;