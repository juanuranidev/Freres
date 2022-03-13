import React, { useState } from 'react';
import ShopLink from './ShopLink/ShopLink';
import OutfitsLink from './OutfitsLink/OutfitsLink';
import Logo from './Logo/Logo';
import Cart from './Cart/Cart';
import CartContent from './CartContent/CartContent';
import Overlay from './Overlay/Overlay';
import './Navbar.scss';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => setOpenMenu(true);
    const handleCloseMenu = () => setOpenMenu(false) ;
    
    return (
      <nav>
        <ul>
          <ShopLink/>
          <OutfitsLink/>
          <li>NOSOTROS</li>
        </ul>
        <Logo/>
        <Cart handleOpenMenu={handleOpenMenu} />
        <CartContent handleCloseMenu={handleCloseMenu} openMenu={openMenu} />
        <Overlay openMenu={openMenu} />
      </nav>
    );
}

export default Navbar;