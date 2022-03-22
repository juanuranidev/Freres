import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ProductDetail from './ProductDetail/ProductDetail';

const ProductFinder = () => {
    const [product, setProduct] = useState<any>({})
    const [loader, setLoader] = useState<boolean>(true)
    const {idProduct}:any = useParams()

    useEffect( () => {
        const dataBase = getFirestore()
        const queryProd = doc (dataBase, 'products', idProduct)
        getDoc(queryProd)
        .then(resp => setProduct({id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
      }, [idProduct])

      return (
        <div>
            {loader
            ? <Loader/>
            : <ProductDetail {...product}/>}
        </div>
  );
}

export default ProductFinder;