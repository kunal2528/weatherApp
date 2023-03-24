import React from 'react';
import '../styles/Header.css';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';

function Header({city}) {
  return (
    <div className='header'>
      <div className='headerMenu'>
        <p className='bolder'>Home</p>
        <p>Cities</p>
        <p>News</p>
      </div>
      <div className='headerCard'>
        <div className='weatherDetailHeader'>Weather Details</div>
        <div className='cardDetail'>
          <div className='cardDetails'>
            <p>Cloudy</p>
            <p>{city?.clouds?.all}%</p>
          </div>
          <div className='cardDetails'>
            <p>Humidity</p>
            <p>{city?.main?.humidity}%</p>
          </div>
          <div className='cardDetails'>
            <p>Wind</p>
            <p>{Math.floor(city?.wind?.speed)}km/h</p>
          </div>
        </div>
      </div>
      <div className='headerBottom'>
        <div className='temp'>
          {Math.ceil(city?.main?.temp)}°
        </div>
        <div className='name'>
          {city?.name}
          <div className='nameDetails'>
            <div>06:45</div>
            <div style={{paddingRight: '10px', paddingLeft: '10px'}}>Thursday</div>
            <div>23/03/23</div>
          </div>
        </div>
        <WbSunnyRoundedIcon className='weatherIcon' />
      </div>
    </div>
  )
}

export default Header;