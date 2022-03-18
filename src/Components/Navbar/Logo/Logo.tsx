import React from 'react';
import { Link } from 'react-router-dom';
import Logotype from './Img/freres.jpg';
import './Logo.scss';

const Logo = () => {
  return (
    <Link to='/'><img src={Logotype} className="logo" alt='logo'/></Link>
  );
}

export default Logo;