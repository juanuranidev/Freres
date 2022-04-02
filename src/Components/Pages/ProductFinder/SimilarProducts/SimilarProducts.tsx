import React from 'react';
import { ProductModel } from '../../../Context/CartContext';
import ProductList from '../../../ProductList/ProductList';
import './SimilarProducts.scss';

interface SimilarProductsProps {
  products: ProductModel[]
}

const SimilarProducts = ({products}: SimilarProductsProps) => {
  return (
    <div className='similarProducts'>
        <h2 className='similarProducts_h2'>TAMBIÉN TE PUEDE GUSTAR</h2>
        <div className='similarProducts_div'>
            <ProductList products={products}/>
        </div>
    </div>
  );
}

export default SimilarProducts;