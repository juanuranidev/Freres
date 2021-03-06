import React from 'react';
import { Link } from 'react-router-dom';
import ImageLink from '../ImageLink/ImageLink';
import './ShopLink.scss';

const ShopLink = () => {
  return (
    <div className='shopLink'>
      <Link to='/shop/all' className='shopLink_a'>
        <li className='shopLink_a_li'>SHOP</li>
      </Link>
      <div className='shopLink_content'>
        <ImageLink
          link='/shop/camperasybuzos'
          src='https://freres.ar/wp-content/uploads/2021/12/productos-noviembre-6-scaled.jpeg.webp'
          alt='CAMPERAS Y BUZOS'
          p='CAMPERAS Y BUZOS'
        />
        <ImageLink
          link='/shop/remeras'
          src='https://freres.ar/wp-content/uploads/2021/10/a.jpg.webp'
          alt='REMERAS'
          p='REMERAS'
        />
        <ImageLink
          link='/shop/pantalones'
          src='https://freres.ar/wp-content/uploads/2021/09/Pantalones-4-scaled.jpg.webp'
          alt='PANTALONES Y SHORTS'
          p='PANTALONES Y SHORTS'
        />
        <ImageLink
          link='/shop/calzado'
          src='https://freres.ar/wp-content/uploads/2021/07/10-scaled.jpg.webp'
          alt='CALZADO'
          p='CALZADO'
        />
        <ImageLink
          link='/shop/accesorios'
          src='https://freres.ar/wp-content/uploads/2021/09/5-3-scaled.jpg.webp'
          alt='ACCESORIOS'
          p='ACCESORIOS'
        />
        <ImageLink
          link='/shop/all'
          src='https://freres.ar/wp-content/uploads/2021/08/Styling-50-scaled.jpg.webp'
          alt='TODOS LOS PRODUCTOS'
          p='TODOS LOS PRODUCTOS'
        />
      </div>
    </div>
  )
}

export default ShopLink;