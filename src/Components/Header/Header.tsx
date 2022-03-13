import React, { useState } from 'react';
import Nav from './Navbar/Navbar';
import Logo from './Logo/Logo';
import CartWidget from './Cart/Cart';
import CartContent from './CartContent/CartContent';
import Overlay from './Overlay/Overlay';
import MessageBar from './MessageBar/MessageBar';
import './Header.scss';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => setOpenMenu(true);
  const handleCloseMenu = () => setOpenMenu(false) ;

  return (
    <header className='header'>
      <div className='a'>
        <Nav/>
        <Logo/>
        <CartWidget handleOpenMenu={handleOpenMenu} />
        <CartContent handleCloseMenu={handleCloseMenu} openMenu={openMenu} />
        <Overlay openMenu={openMenu} />

      </div>
        <MessageBar/>
    </header>

  );
}

export default Header;