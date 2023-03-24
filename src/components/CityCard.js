import React, { useEffect, useState } from 'react';
import '../styles/CityCard.css';
import Api from './Api';

function CityCard({cityPlace, src, weather, date}) {  
  const [city, setCity] = useState(null);
  
  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, []);

  const getData = async () => {
    const res = await Api(cityPlace);
    setCity(res);
  }

  return (
    <div className='cityCard'>
      <div className='cityImg'>
        <img src={src} alt={weather} />
        <p>{weather}</p>
      </div>
      <div className='cityTemp'>
        <div className='cardTemp'>{Math.ceil(city?.main?.temp)}°</div>
        <div className='cityDetails'>
          <p className='cardCity'>{city?.name}</p>
          <p className='cardDate'>{date}</p>
        </div>
      </div>
    </div>
  )
}

export default CityCard;