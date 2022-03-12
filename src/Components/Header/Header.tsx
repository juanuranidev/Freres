import React, { useState } from 'react';
import Nav from './Navbar/Navbar';
import Logo from './Logo/Logo';
import CartWidget from './Cart/Cart';
import CartContent from './CartContent/CartContent';
import './_Header.scss';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = ():any => setOpenMenu(true)
  const handleCloseMenu = ():any => setOpenMenu(false)

  return (
    <header className='header'>
        <Nav/>
        <Logo/>
        <CartWidget handleOpenMenu={handleOpenMenu} />
        <CartContent handleCloseMenu={handleCloseMenu} openMenu={openMenu} />
    </header>
  )
}

export default Header