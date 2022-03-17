import React, { useEffect, useState } from 'react';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Loader from '../../../Loader/Loader';
import ProductList from '../../../ProductList/ProductList';
import './Masterpieces.scss';

const Masterpieces = () => {
  const [data, setData] = useState<any>([])
  const [loader, setLoader] = useState<boolean>(true)

  useEffect(() => {
      const dataBase = getFirestore()
      const queryCollection = query(collection(dataBase, 'products'), where('masterpiece', '==', true))
      getDocs(queryCollection)
          .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
          .catch(err => console.log(err))
          .finally(() => setLoader(false))
  }, []);

  return (
    <section className='masterpieces'>
      <h2 className='masterpieces_h2'>MASTERPIECES</h2>
      <div className='masterpieces_div'>
        {loader===true
        ? <Loader/>
        : <ProductList products={data}/>}
      </div>
      <div className='masterpieces_button'>
        <Link to='/shop/all'>
          <button>VER TODOS LOS PRODUCTOS</button>
        </Link>
      </div>
    </section>
  );
}

export default Masterpieces;