import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png'
import './Logo.css';

function Logo() {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 30 }} style={{ height: 200, width: 200 }} >
        <div className="Tilt-inner pa1" style={{paddingTop: '20px'}}>
          <img className="w-80" src={brain} alt="brain logo"/>
        </div>
      </Tilt>
    </div>
  )
}

export default Logo;