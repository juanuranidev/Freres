import React, { useEffect, useState } from 'react';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import Loader from '../../../Loader/Loader';
import ProductList from '../../../ProductList/ProductList';
import './TopSellers.scss';

const TopSellers = () => {
  const [data, setData] = useState<any>([])
  const [loader, setLoader] = useState<boolean>(true)

  useEffect(() => {
    const dataBase = getFirestore()
    const queryCollection = query(collection(dataBase, 'products'), where('top_seller', '==', true))
    getDocs(queryCollection)
        .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
  }, []);

  return (
    <section className='topSellers'>
        <h2 className='topSellers_h2'>TOP SELLERS</h2>
        <div className='topSellers_div'>
          {loader===true
          ? <Loader/>
          : <ProductList products={data}/>}
        </div>
        <div className='topSellers_button'>
          <button>VER TODOS LOS PRODUCTOS</button>
        </div>
    </section>
  );
}

export default TopSellers;