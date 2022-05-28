import React from 'react';
import { Link } from 'react-router-dom';
import FreresLogo from '../../../Assets/Logos/FreresLogo.jpg';
import './Logo.scss';

const Logo = () => {
  return (
    <Link to='/'><img src={FreresLogo} className="logo" alt='logo'/></Link>
  );
}

export default Logo;