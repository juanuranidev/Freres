import React from 'react';
import { Link } from 'react-router-dom';
import './ShopLink.scss';

const ShopLink = () => {
    return (
      <div className='shopLink'>
        <Link to='/shop/all'><li>SHOP</li></Link>
        <div className='shopLink_content'>
          <Link to='/shop/camperasybuzos' className='shopLink_link'>
            <img
              className='shopLink_link_img'
              src='https://freres.ar/wp-content/uploads/2021/12/productos-noviembre-6-scaled.jpeg.webp'
              alt='CAMPERAS Y BUZOS'/>
            <p className='shopLink_link_p'>CAMPERAS Y BUZOS</p>
          </Link>
          <Link to='/shop/remeras' className='shopLink_link'>
            <img
              className='shopLink_link_img'
              src='https://freres.ar/wp-content/uploads/2021/10/a.jpg.webp'
              alt='REMERAS'/>
            <p className='shopLink_link_p'>REMERAS</p>
          </Link>
          <Link to='/shop/pantalones' className='shopLink_link'>
            <img
              className='shopLink_link_img'
              src='https://freres.ar/wp-content/uploads/2021/09/Pantalones-4-scaled.jpg.webp'
              alt='PANTALONES Y SHORTS'/>
            <p className='shopLink_link_p'>PANTALONES Y SHORTS</p>
          </Link>
          <Link to='/shop/calzado' className='shopLink_link'>
            <img
              className='shopLink_link_img'
              src='https://freres.ar/wp-content/uploads/2021/07/10-scaled.jpg.webp'
              alt='CALZADO'/>
            <p className='shopLink_link_p'>CALZADO</p>
          </Link>
          <Link to='/shop/accesorios' className='shopLink_link'>
            <img
              className='shopLink_link_img'
              src='https://freres.ar/wp-content/uploads/2021/09/5-3-scaled.jpg.webp'
              alt='ACCESORIOS'/>
            <p className='shopLink_link_p'>ACCESORIOS</p>
          </Link>
          <Link to='/shop/all' className='shopLink_link'>
            <img
              className='shopLink_link_img'
              src='https://freres.ar/wp-content/uploads/2021/08/Styling-50-scaled.jpg.webp'
              alt='TODOS LOS PRODUCTOS'/>
            <p className='shopLink_link_p'>TODOS LOS PRODUCTOS</p>
          </Link>
        </div>
      </div>
    )
}

export default ShopLink;