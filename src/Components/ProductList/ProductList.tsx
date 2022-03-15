import React from 'react';
import Product from './Product/Product';

const ProductList = ({products}:any) => {
  return (
    <>
      {products.map((product:any) => <Product {...product} key={product.id} />)}
    </>
  );
}

export default ProductList;