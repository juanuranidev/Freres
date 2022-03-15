import React from 'react';
import './Product.scss'

const Product = (product: any) => {
  return (
    <div key={product.id} className='product'>
    <img src={product.images[0]} className='product_img'/>
        <div className='product_div'>
            <h2 className='product_div_h2'>{product.name} |</h2>
            <p className='product_div_p'>${product.price}</p>
        </div>
        <div className='product_sizes'>      
          <p className='product_sizes_p'>AGREGADO RÁPIDO</p>
          {product.format_of_size_chart==="number" &&
            <div className='product_sizes_div'>
              <button className='product_sizes_div_button'>38</button>
              <button className='product_sizes_div_button'>40</button>
              <button className='product_sizes_div_button'>42</button>
              <button className='product_sizes_div_button'>44</button>
            </div>}
          {product.format_of_size_chart==="letter" &&
            <div className='product_sizes_div'>
              <button className='product_sizes_div_button'>XS</button>
              <button className='product_sizes_div_button'>S</button>
              <button className='product_sizes_div_button'>M</button>
              <button className='product_sizes_div_button'>L</button>
              <button className='product_sizes_div_button'>XL</button>
            </div>} 
          {product.format_of_size_chart==="none" &&
            <div className='product_sizes_div'>
              <button className='product_sizes_div_buttonAddToCart'>AGREGAR AL CARRITO</button>
            </div>}
      </div>
    </div>
  );
}

export default Product;