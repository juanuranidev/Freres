import React from "react";
import { ProductModel } from "../../Context/CartContext";
import Product from "./Product/Product";

interface ProductListProps {
  products: ProductModel[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <React.Fragment>
      {products.map((product: ProductModel) => (
        <Product {...product} key={product.id} />
      ))}
    </React.Fragment>
  );
};

export default ProductList;
