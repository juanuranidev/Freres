import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../Pages/Main/Slider/ImportImages';
import CloseMenu from '../CloseMenu/CloseMenu';
import './MenuResponsive.scss';

interface MenuResponsiveProps{
    handleCloseMenu: () => void;
    openMenu: boolean;
}

const MenuResponsive = ({handleCloseMenu, openMenu}:MenuResponsiveProps) => {
  return (
    <div className={openMenu===true ?'menuResponsive' :'menuResponsive menuClose'}>
        <div>
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
            <div className='menuResponsive_div' style={{display:"flex", justifyContent: "center", flexWrap: "wrap"}} >
                {images.map((img) => <img src={img} style={{width: "4rem", margin: "0.25rem"}} />)}
            </div>
    </div>
  );
}

export default MenuResponsive;