import React, { useEffect, useState } from 'react';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import { ProductModel } from '../Context/CartContext';

const useGetProducts = (parameter1:string, parameter2:any, parameter3:any ) => {
  const [loader, setLoader] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductModel[]>([]);

  const getProducts = ():void => {
    try{
      const dataBase = getFirestore()
      const queryCollection = query(collection(dataBase, 'products'), where(parameter1, parameter2, parameter3))
      
      getDocs(queryCollection)
        .then(res => setProducts(res.docs.map(prod => ({id: prod.id, ...prod.data()}) as ProductModel)))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    } catch(error){
      console.log(error)
      setLoader(false)
    }
  }

  useEffect(() => {
    getProducts()
  }, []);

  return ({products, loader});
}

export default useGetProducts;