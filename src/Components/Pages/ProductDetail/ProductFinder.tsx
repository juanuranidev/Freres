import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc} from 'firebase/firestore';
import { ProductModel } from '../../Context/CartContext';
import { useParams } from 'react-router-dom';
import Loader from '../../Loader/Loader';
import ProductDetail from './ProductDetail/ProductDetail';

const ProductFinder = () => {
  const [product, setProduct] = useState<ProductModel>();
  const [loader, setLoader] = useState<boolean>(true);
  
  const { idProduct }:any = useParams();
  
  useEffect(() => {
    setLoader(true)

    const dataBase = getFirestore()
    const queryProd = doc (dataBase, 'products', idProduct)

    getDoc(queryProd)
    .then(resp => setProduct({id: resp.id, ...resp.data()} as ProductModel))
    .catch(err => console.log(err))
    .finally(() => setLoader(false))

  }, [idProduct]);

  return (
    <div>
      {loader
      ? <Loader/>
      : <ProductDetail product={product!}/>}
    </div>
  );
}

export default ProductFinder;