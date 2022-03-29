import React, { useContext } from 'react';
import { ProductModel } from '../../Context/CartContext';
import { CartContext } from '../../Context/CartContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Product.scss';


const Product = (product: ProductModel) => {
const {addToCart} = useContext(CartContext)

return (
    <motion.div
      initial={{  x:-100, opacity: 0  }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "linear", duration: 0.25 }}
      exit={{opacity: 0}}
      key={product.id} className='product'>
      <Link to={`/product/${product.id}`}>
        <img src={product.images[0]} className='product_img'/>
      </Link>
      <div className='product_div'>
          <h2 className='product_div_h2'>{product.name}</h2>
          <p className='product_div_p'>${product.price}</p>
      </div>
      <div className='product_sizes'>      
        <p className='product_sizes_p'>AGREGADO RÁPIDO</p>
        {product.format_of_size_chart==="number" &&
          <div className='product_sizes_div'>
            <button className='product_sizes_div_button' onClick={() => addToCart?.(product, 1, "38")}>38</button>
            <button className='product_sizes_div_button' onClick={() => addToCart?.(product, 1, "40")}>40</button>
            <button className='product_sizes_div_button' onClick={() => addToCart?.(product, 1, "42")}>42</button>
            <button className='product_sizes_div_button' onClick={() => addToCart?.(product, 1, "44")}>44</button>
          </div>}
        {product.format_of_size_chart==="letter" &&
          <div className='product_sizes_div'>
            <button className='product_sizes_div_button' onClick={() => addToCart?.(product, 1, "XX")}>XS</button>
            <button className='product_sizes_div_button' onClick={() => addToCart?.(product, 1, "S")}>S</button>
            <button className='product_sizes_div_button' onClick={() => addToCart?.(product, 1, "M")}>M</button>
            <button className='product_sizes_div_button' onClick={() => addToCart?.(product, 1, "L")}>L</button>
            <button className='product_sizes_div_button' onClick={() => addToCart?.(product, 1, "XL")}>XL</button>
          </div>} 
        {product.format_of_size_chart==="none" &&
          <div className='product_sizes_div'>
            <button className='product_sizes_div_buttonAddToCart' onClick={() => addToCart?.(product, 1, "No aplica")}>AGREGAR AL CARRITO</button>
          </div>}
      </div>
    </motion.div>
  );
}

export default Product;