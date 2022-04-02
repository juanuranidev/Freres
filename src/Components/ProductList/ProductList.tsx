import React from 'react';
import { ProductModel } from '../Context/CartContext';
import Product from './Product/Product';

interface ProductListProps {
  products: ProductModel[];
}

const ProductList = ({products}:ProductListProps) => {
  return (
    <>
      {products.map((product:ProductModel) => <Product {...product} key={product.id} />)}
    </>
  );
}

export default ProductList;