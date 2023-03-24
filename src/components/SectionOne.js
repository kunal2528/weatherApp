import React from 'react';
import '../styles/SectionOne.css';
import CityCard from './CityCard';
import SearchIcon from '@mui/icons-material/Search';

function SectionOne() {
  return (
    <div className='sectionOne'>
      <h3>Cities</h3>
      <div className="cards">
        <CityCard 
          src = 'https://images.unsplash.com/photo-1431440869543-efaf3388c585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGh1bmRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
          weather = 'Thunder'
          cityPlace='Delhi'
          date ='9/03/23'
        />
        <CityCard 
          src = 'https://images.unsplash.com/photo-1469365556835-3da3db4c253b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNsb3VkeXxlbnwwfDB8MHx8&auto=format&fit=crop&w=600&q=60'
          weather = 'Cloudy'
          cityPlace = 'Chennai'
          date ='9/03/23'
        />
        <CityCard 
          src = 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuJTIwYW5kJTIwY2xvdWRzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
          weather = 'Sunny'
          cityPlace = 'Jaipur'
          date ='9/03/23'
        />
      </div>
      <div className='input'>
        <input className='inputSearch' type="text" placeholder='Search city' />
        <SearchIcon className='searchIcon' />
      </div>
    </div>
  )
}

export default SectionOne