import React from 'react';
import CartWidget from './Cart/CartWidget';
import Links from './Links/Links';
import Logo from './Logo/Logo';

const Nav = () => {
  return (
    <nav>
        <Links/>
        <Logo/>
        <CartWidget/>
    </nav>
  )
}

export default Nav;