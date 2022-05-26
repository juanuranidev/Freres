import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Images } from './ImportImages'
import { motion } from 'framer-motion';
import CloseMenu from '../CloseMenu/CloseMenu';
import './MenuResponsive.scss';

interface MenuResponsiveProps{
    handleCloseMenu: () => void;
    openMenu: boolean;
}

const variants = {
    open: { opacity: 1, x: 0, display: "flex" },
    closed: { opacity: 0, x: "-10%", display: "none" },
}

const MenuResponsive = ({handleCloseMenu, openMenu}:MenuResponsiveProps) => {
    const [showShop, setShowShop] = useState<boolean>(false);
    const [showOutfits, setShowOutfits] = useState<boolean>(false)

    useEffect(() => {
        setShowShop(false)
        setShowOutfits(false)
    }, [openMenu])

    const handleShop = () => {
        setShowShop(!showShop)
        setShowOutfits(false)
    }

    const handleOutfits = () => {
        setShowOutfits(!showOutfits)
        setShowShop(false)
    }


    return (
    <div className={openMenu===true ?'menuResponsive' :'menuResponsive menuClose'}>
        <div>
            <div className='menuResponsive_close'>
                <CloseMenu handleCloseMenu={handleCloseMenu} />
            </div>
            <ul className='menuResponsive_ul'>
                <li className='menuResponsive_ul_li'>
                    <Link  className='menuResponsive_ul_li_a' to='/shop/all'>SHOP</Link>
                    {!showShop && <span className="fas fa-angle-down menuResponsive_ul_li_span" onClick={handleShop} />}
                    {showShop && <span className="fas fa-minus menuResponsive_ul_li_span" onClick={handleShop} />}
                </li>
                <motion.div
                    animate={showShop ? "open" : "closed"}
                    variants={variants}
                    className='animated_div'>
                        <Link to='/shop/camperasybuzos' className="animated_div_a" onClick={handleCloseMenu}>
                            <img
                                src='https://freres.ar/wp-content/uploads/2021/12/productos-noviembre-6-scaled.jpeg.webp'
                                alt='CAMPERAS Y BUZOS'
                                className="animated_div_a_img"/>
                            <p className="animated_div_a_p">CAMPERAS Y BUZOS</p>
                        </Link>
                        <Link to='/shop/remeras' className="animated_div_a" onClick={handleCloseMenu}>
                            <img
                                src={'https://freres.ar/wp-content/uploads/2021/10/a.jpg.webp'}
                                alt='REMERAS'
                                className="animated_div_a_img" />
                            <p className="animated_div_a_p">REMERAS</p>
                        </Link>
                        <Link to='/shop/pantalones' className="animated_div_a" onClick={handleCloseMenu}>
                            <img
                                src={'https://freres.ar/wp-content/uploads/2021/09/Pantalones-4-scaled.jpg.webp'}
                                alt='PANTALONES Y SHORTS'
                                className="animated_div_a_img" />
                            <p className="animated_div_a_p">PANTALONES Y SHORTS</p>
                        </Link>
                        <Link to='/shop/calzado' className="animated_div_a" onClick={handleCloseMenu}>
                            <img
                                src={'https://freres.ar/wp-content/uploads/2021/07/10-scaled.jpg.webp'}
                                alt='CALZADO'
                                className="animated_div_a_img" />
                            <p className="animated_div_a_p">CALZADO</p>
                        </Link>
                        <Link to='/shop/accesorios' className="animated_div_a" onClick={handleCloseMenu}>
                            <img
                                src={'https://freres.ar/wp-content/uploads/2021/09/5-3-scaled.jpg.webp'}
                                alt='ACCESORIOS'
                                className="animated_div_a_img" />
                            <p className="animated_div_a_p">ACCESORIOS</p>
                        </Link>
                        <Link to='/shop/all' className="animated_div_a" onClick={handleCloseMenu}>
                            <img
                                src={'https://freres.ar/wp-content/uploads/2021/08/Styling-50-scaled.jpg.webp'}
                                alt='TODOS LOS PRODUCTOS'
                                className="animated_div_a_img" />
                            <p className="animated_div_a_p">TODOS LOS PRODUCTOS</p>
                        </Link>
                </motion.div>
                <li className='menuResponsive_ul_li'>
                    <Link  className='menuResponsive_ul_li_a' to='/shop/essential_outfits'>ESSENTIAL OUTFITS</Link>
                    {!showOutfits && <span className="fas fa-angle-down menuResponsive_ul_li_span" onClick={handleOutfits} />}
                    {showOutfits && <span className="fas fa-minus menuResponsive_ul_li_span" onClick={handleOutfits} />}
                </li>
                <motion.div
                    animate={showOutfits ? "open" : "closed"}
                    variants={variants}
                    className='animated_div'>
                    <div className='animated_div_div'>
                        <Link to='/outfit/elegant' className='animated_div_div_a' onClick={handleCloseMenu}>
                            <img src={'https://freres.ar/wp-content/uploads/2021/08/IMG_0350-1-uai-1440x1440.jpg'} alt="Outfit imágen" className='animated_div_div_img'/>
                        </Link>
                        <Link to='/outfit/relaxed' className='animated_div_div_a' onClick={handleCloseMenu}>
                            <img src={'https://freres.ar/wp-content/uploads/2021/08/OUTFIT-4-scaled-uai-720x720.jpg'} alt="Outfit imágen" className='animated_div_div_img'/>
                        </Link>
                        <Link to='/outfit/casual' className='animated_div_div_a' onClick={handleCloseMenu}>
                            <img src={'https://freres.ar/wp-content/uploads/2021/08/OUTFIT-6-scaled-uai-720x720.jpg'} alt="Outfit imágen" className='animated_div_div_img'/>
                        </Link>
                        <Link to='/outfit/street' className='animated_div_div_a' onClick={handleCloseMenu}>
                            <img src={'https://freres.ar/wp-content/uploads/2021/08/IMG_0341-1-uai-720x720.jpg'} alt="Outfit imágen" className='animated_div_div_img'/>
                        </Link>
                    </div>
                </motion.div>
                <li className='menuResponsive_ul_li' onClick={handleCloseMenu}>
                    <Link className='menuResponsive_ul_li_a' to='/shop/about'>NOSOTROS</Link>
                </li>
            </ul>
        </div>
        <div className='menuResponsive_images'>
            {Images.map((img:string, index:number) => <img className='menuResponsive_images_img' key={index} src={img} alt="Imágen decorativa de prenda" />)}
        </div>
    </div>
  );
}

export default MenuResponsive;