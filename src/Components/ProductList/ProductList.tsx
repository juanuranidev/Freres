import React from 'react';
import { ProductModel } from '../Context/CartContext';
import Product from './Product/Product';

const ProductList = ({products}:any) => {
  return (
    <>
      {products.map((product:ProductModel) => <Product {...product} key={product.id} />)}
    </>
  );
}

export default ProductList;