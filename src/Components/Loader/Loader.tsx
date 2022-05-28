import React from 'react';
import FreresLogo from '../../Assets/Logo/FreresLogo.jpg';
import './Loader.scss';

const Loader = () => {
  return (
    <div className='loader'>
      <img className='loader_img' src={FreresLogo}/>
    </div>
  );
}

export default Loader;