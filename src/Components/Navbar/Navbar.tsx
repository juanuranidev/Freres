import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OpenMenu from './OpenMenu/OpenMenu';
import MenuResponsive from './MenuResponsive/MenuResponsive';
import ShopLink from './ShopLink/ShopLink';
import OutfitsLink from './OutfitsLink/OutfitsLink';
import Logo from './Logo/Logo';
import Cart from './Cart/Cart';
import CartContent from './CartContent/CartContent';
import Overlay from './Overlay/Overlay';
import './Navbar.scss';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openCart, setOpenCart] = useState(false);

  const handleOpenCart = () => setOpenCart(true);
  const handleCloseCart = () => setOpenCart(false) ;
  
  const handleOpenMenu = () => setOpenMenu(true)
  const handleCloseMenu = () => setOpenMenu(false)

  return (
    <nav>
      <OpenMenu handleOpenMenu={handleOpenMenu} />
      <MenuResponsive handleCloseMenu={handleCloseMenu} openMenu={openMenu} />
      <ul>
        <ShopLink/>
        <OutfitsLink/>
        <Link to='/about'><li>NOSOTROS</li></Link>
      </ul>
      <Logo/>
      <Cart handleOpenCart={handleOpenCart} />
      <CartContent handleCloseCart={handleCloseCart} openCart={openCart} />
      <Overlay openCart={openCart} openMenu={openMenu} />
    </nav>
  );
}

export default Navbar;