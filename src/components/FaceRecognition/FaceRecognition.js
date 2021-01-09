import React from 'react';
import Tilt from 'react-tilt';
import './FaceRecognition.css';

function FaceRecognition({ imageUrl, box }) {
  return (
    <div className='center ma'>
      <div className='absolute m2'>
        <Tilt className='mt3 mb5' options={{ max : 30 }}>
          <img id='inputimage' src={imageUrl} alt='' width='500px' height='auto'/>
          <div className='bounding-box'
            style={{
              top: box.topRow,
              right: box.rightCol,
              left: box.leftCol,
              bottom: box.bottomRow
            }}>
          </div>
        </Tilt>
      </div>
    </div>
  )
}

export default FaceRecognition;