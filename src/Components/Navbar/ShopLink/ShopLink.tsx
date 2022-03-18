import React from 'react';
import { Link } from 'react-router-dom';
import './ShopLink.scss';

const ShopLink = () => {
    return (
    <div className='shopLink'>
      <div>
      <Link to='/shop/all'><li>SHOP</li></Link>
        <div className='shopLink_content'>
        <Link to='/shop/camperasybuzos'>
          <div>
            <img src={'https://freres.ar/wp-content/uploads/2021/12/productos-noviembre-6-scaled.jpeg.webp'} alt='CAMPERAS Y BUZOS'/>
            <p>CAMPERAS Y BUZOS</p>
          </div>
        </Link>
        <Link to='/shop/remeras'>
          <div>
            <img src={'https://freres.ar/wp-content/uploads/2021/10/a.jpg.webp'} alt='REMERAS'/>
            <p>REMERAS</p>
          </div>
        </Link>
        <Link to='/shop/pantalones'>
          <div>
            <img src={'https://freres.ar/wp-content/uploads/2021/09/Pantalones-4-scaled.jpg.webp'} alt='PANTALONES Y SHORTS'/>
            <p>PANTALONES Y SHORTS</p>
          </div>
        </Link>
        <Link to='/shop/calzado'>
          <div>
            <img src={'https://freres.ar/wp-content/uploads/2021/07/10-scaled.jpg.webp'} alt='CALZADO'/>
            <p>CALZADO</p>
          </div>
        </Link>
        <Link to='/shop/accesorios'>
          <div>
            <img src={'https://freres.ar/wp-content/uploads/2021/09/5-3-scaled.jpg.webp'} alt='ACCESORIOS'/>
            <p>ACCESORIOS</p>
          </div>
        </Link>
        <Link to='/shop/all'>
          <div>
            <img src={'https://freres.ar/wp-content/uploads/2021/08/Styling-50-scaled.jpg.webp'} alt='TODOS LOS PRODUCTOS'/>
            <p>TODOS LOS PRODUCTOS</p>
          </div>
        </Link>
        </div>
      </div>
    </div>
    )
}

export default ShopLink;