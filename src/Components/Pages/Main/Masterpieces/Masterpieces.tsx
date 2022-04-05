import React, { useEffect, useState } from 'react';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import { ProductModel } from '../../../Context/CartContext';
import Loader from '../../../Loader/Loader';
import ProductList from '../../../ProductList/ProductList';
import PrimaryButton from '../../../Buttons/PrimaryButton/PrimaryButton';
import './Masterpieces.scss';

const Masterpieces = () => {
  const [products, setProducts] = useState<ProductModel[]>([])
  const [loader, setLoader] = useState<boolean>(true)

  useEffect(() => {
      const dataBase = getFirestore()
      const queryCollection = query(collection(dataBase, 'products'), where('masterpiece', '==', true))
      getDocs(queryCollection)
          .then(res => setProducts(res.docs.map(prod => ({id: prod.id, ...prod.data()}) as ProductModel)))
          .catch(err => console.log(err))
          .finally(() => setLoader(false))
  }, []);

  return (
    <section className='masterpieces'>
      <h2 className='masterpieces_h2'>MASTERPIECES</h2>
      <div className='masterpieces_div'>
        {loader===true
        ? <Loader/>
        : <ProductList products={products}/>}
      </div>
      <div className='masterpieces_button'>
        <PrimaryButton link="/shop/all" text="TODOS LOS PRODUCTOS"/>
      </div>
    </section>
  );
}

export default Masterpieces;