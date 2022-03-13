import React from 'react';
import ShopLink from './ShopLink/ShopLink';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul>
      <ShopLink/>
      </ul>
    </nav>
  )
}

export default Navbar;