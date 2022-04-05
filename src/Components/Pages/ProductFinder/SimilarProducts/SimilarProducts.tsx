import React, { useEffect, useState } from 'react';
import { ProductModel } from '../../../Context/CartContext';
import ProductList from '../../../ProductList/ProductList';
import './SimilarProducts.scss';

interface SimilarProductsProps {
  product: ProductModel;
  products: ProductModel[];
  setSize: (value: string) => void;
  setAmount: (value: number) => void;
} 

const SimilarProducts = ({product, products, setSize, setAmount}: SimilarProductsProps) => {
  const [similarProducts, setSimilarProducts] = useState<ProductModel[]>([])

  useEffect(() => {
    setSimilarProducts([...products].sort(() => 0.5 - Math.random()).splice(1, 4))
  }, [products, product])

  const handleResetProduct = () => {
    setSize("")
    setAmount(0)
  }

  return (
    <div className='similarProducts'>
        <h2 className='similarProducts_h2'>TAMBIÉN TE PUEDE GUSTAR</h2>
        <div className='similarProducts_div' onClick={handleResetProduct} >
            <ProductList products={similarProducts} />
        </div>
    </div>
  );
}

export default SimilarProducts;