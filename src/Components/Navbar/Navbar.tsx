import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import MenuResponsive from './MenuResponsive/MenuResponsive';
import ShopLink from './ShopLink/ShopLink';
import OutfitsLink from './OutfitsLink/OutfitsLink';
import FreresLogo from '../../Assets/Logos/FreresLogo.jpg'
import CartContent from './CartContent/CartContent';
import Overlay from '../Overlay/Overlay';
import './Navbar.scss';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  
  const { cartList, handleOpenCart } = useContext(CartContext)

  const handleOpenMenu = () => setOpenMenu(true);
  const handleCloseMenu = () => setOpenMenu(false);

  return (
    <nav className='nav'>
      <div className='nav_openMenu'>
        <span className="fas fa-bars fa-2x nav_openMenu_span" onClick={handleOpenMenu}/>
      </div>
      <ul className='nav_ul'>
        <ShopLink/>
        <OutfitsLink/>
        <Link to='/about' className='nav_ul_a'>
          <li className='nav_ul_a_li'>NOSOTROS</li>
        </Link>
      </ul>
      <Link to='/'><img src={FreresLogo} className="nav_logo" alt='logo'/></Link>
      <ul className='nav_second_ul'>
        <Link to='/build-your-outfit' className='nav_second_ul_a'>ARMA TU OUTFIT</Link>
        <p onClick={handleOpenCart} className='nav_second_ul_p'>CARRITO ({cartList.length??0})</p>
      </ul>
      <CartContent />
      <Overlay openMenu={openMenu} handleCloseMenu={handleCloseMenu} />
      <MenuResponsive handleCloseMenu={handleCloseMenu} openMenu={openMenu} />
    </nav>
  );
}

export default Navbar;