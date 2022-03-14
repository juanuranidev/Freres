import React from 'react';
import Product from './Product/Product';

const ProductList = ({products}:any) => {
  return (
    <>
      {products.map((product:any) => <Product {...product}/>)}
    </>
  );
}

export default ProductList;