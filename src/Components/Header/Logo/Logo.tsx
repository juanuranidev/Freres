import React from 'react';
import Logotype from './Img/freres.jpg';
import './_Logo.scss';

const Logo = () => {
  return (
    <img src={Logotype} className="logo" />
  )
}

export default Logo;