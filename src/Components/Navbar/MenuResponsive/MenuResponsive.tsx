import React from 'react';
import { Link } from 'react-router-dom';
import CloseMenu from '../CloseMenu/CloseMenu';
import './MenuResponsive.scss'

interface MenuResponsiveProps{
    handleCloseMenu: any,
    openMenu: any
}

const MenuResponsive = ({handleCloseMenu, openMenu}:MenuResponsiveProps) => {
  return (
    <div className={openMenu===true ?'menuResponsive' :'menuResponsive menuClose'}>
        <div className='menuResponsive_close'>
            <CloseMenu handleCloseMenu={handleCloseMenu} />
        </div>
        <ul className='menuResponsive_ul'>
            <Link to='/shop/all'>
                <li>Shop</li>
            </Link>
            <Link to='/'>
                <li>Essential Outfits</li>
            </Link>
            <Link to='/'>
                <li>Nosotros</li>
            </Link>
        </ul>
    </div>
  );
}

export default MenuResponsive;