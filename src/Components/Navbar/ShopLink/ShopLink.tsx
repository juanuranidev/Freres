import React from 'react';
import './ShopLink.scss';

const ShopLink = () => {
    return (
    <div className='shopLink'>
      <div>
        <li>SHOP</li>
        <div className='shopLink_content'>
          <div>
            <img src={'https://freres.ar/wp-content/uploads/2021/12/productos-noviembre-6-scaled.jpeg.webp'} />
            <p>CAMPERAS Y BUZOS</p>
          </div>
          <div>
            <img src={'https://freres.ar/wp-content/uploads/2021/10/a.jpg.webp'} />
            <p>REMERAS</p>
          </div>
          <div>
            <img src={'https://freres.ar/wp-content/uploads/2021/09/Pantalones-4-scaled.jpg.webp'} />
            <p>PANTALONES</p>
          </div>
          <div>
            <img src={'https://freres.ar/wp-content/uploads/2021/07/10-scaled.jpg.webp'} />
            <p>CALZADO</p>
          </div>
          <div>
            <img src={'https://freres.ar/wp-content/uploads/2021/08/Styling-50-scaled.jpg.webp'} />
            <p>TODOS LOS PRODUCTOS</p>
          </div>
          <div>
            <img src={'https://freres.ar/wp-content/uploads/2021/09/5-3-scaled.jpg.webp'} />
            <p>ACCESORIOS</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default ShopLink;