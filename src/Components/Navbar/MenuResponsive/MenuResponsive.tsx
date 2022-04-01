import React from 'react';
import { Link } from 'react-router-dom';
import CloseMenu from '../CloseMenu/CloseMenu';
import './MenuResponsive.scss';

interface MenuResponsiveProps{
    handleCloseMenu: () => void;
    openMenu: boolean;
}

const MenuResponsive = ({handleCloseMenu, openMenu}:MenuResponsiveProps) => {
  return (
    <div className={openMenu===true ?'menuResponsive' :'menuResponsive menuClose'}>
        <div className='menuResponsive_close'>
            <CloseMenu handleCloseMenu={handleCloseMenu} />
        </div>
        <ul className='menuResponsive_ul'>
            <Link to='/shop/all'>
                <li onClick={handleCloseMenu}>SHOP</li>
            </Link>
            <Link to='/essential_outfits'>
                <li onClick={handleCloseMenu}>ESSENTIAL OUTFITS</li>
            </Link>
            <Link to='/about'>
                <li onClick={handleCloseMenu}>NOSOTROS</li>
            </Link>
        </ul>
    </div>
  );
}

export default MenuResponsive;