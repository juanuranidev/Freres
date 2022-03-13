import React from 'react';
import ShopLink from './ShopLink/ShopLink';
import OutfitsLink from './OutfitsLink/OutfitsLink';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul>
        <ShopLink/>
        <OutfitsLink/>
        <li>NOSOTROS</li>
      </ul>
    </nav>
  )
}

export default Navbar;