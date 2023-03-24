import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='weatherApp'>WEATHERAPP</div>
      <div className='footerOptions'>
        <div>
          <p>Home</p>
          <p>Cities</p>
          <p>News</p>
        </div>
        <div>
          <p>Contact us</p>
          <p>FAQs</p>
        </div>
      </div>
    </div>
  )
}

export default Footer