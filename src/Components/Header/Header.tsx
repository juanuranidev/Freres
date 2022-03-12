import React from 'react'
import CartWidget from './Cart/Cart';
import Nav from './Navbar/Navbar';
import Logo from './Logo/Logo';
import './_Header.scss';

const Header = () => {
  return (
    <header className='header'>
        <Nav/>
        <Logo/>
        <CartWidget/>
    </header>
  )
}

export default Header