import React from 'react';
import { ProductModel } from '../../Context/CartContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Sizes from '../../Sizes/Sizes';
import './Product.scss';

const Product = (product: ProductModel) => {

return (
    <motion.div
    transition={{ ease: "linear", duration: 0.25 }}
      initial={{  x:-100, opacity: 0  }}
      animate={{ x: 0, opacity: 1 }}
      exit={{opacity: 0}}
      className='product'>
      <Link to={`/product/${product.id}`}>
        <img src={product.images[0]} className='product_img'/>
      </Link>
      <div className='product_div'>
        <h2 className='product_div_h2'>{product.name}</h2>
        <p className='product_div_p'>${product.price}</p>
      </div>
      <div className='product_sizes'>      
        <p className='product_sizes_p'>AGREGADO RÁPIDO</p>
          <Sizes sizeType={product.format_of_size_chart} product={product}/>
      </div>
    </motion.div>
  );
}

export default Product;