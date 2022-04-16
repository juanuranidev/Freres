import React from 'react';
import IMAGE1 from './img/IMAGE1.jpg';
import IMAGE2 from './img/IMAGE2.jpg';
import './MainImages.scss';

const MainImages = () => {
  return (
    <div className='mainImages'>
      <h1 className='mainImages_h1'>Frères</h1>
      <img className='mainImages_img' src={IMAGE1} alt="Imágen principal"/>
      <img className='mainImages_img' src={IMAGE2} alt="Imágen principal"/>
      <div className='left' />
      <div className='right' />
    </div>
  );
}

export default MainImages;