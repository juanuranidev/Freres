import React, { useEffect, useState } from 'react';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import { ProductModel } from '../../../Context/CartContext';
import { Link } from 'react-router-dom';
import Loader from '../../../Loader/Loader';
import ProductList from '../../../ProductList/ProductList';
import './TopSellers.scss';

const TopSellers = () => {
  const [products, setProducts] = useState<ProductModel[]>([])
  const [loader, setLoader] = useState<boolean>(true)

  useEffect(() => {
    const dataBase = getFirestore()
    const queryCollection = query(collection(dataBase, 'products'), where('top_seller', '==', true))
    getDocs(queryCollection)
        .then(res => setProducts(res.docs.map(prod => ({id: prod.id, ...prod.data()}) as ProductModel)))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
      }, []);

  return (
    <section className='topSellers'>
      <h2 className='topSellers_h2'>TOP SELLERS</h2>
      <div className='topSellers_div'>
        {loader===true
        ? <Loader/>
        : <ProductList products={products}/>}
      </div>
      <div className='topSellers_button'>
      <Link to='/shop/all'>
        <button>VER TODOS LOS PRODUCTOS</button>
      </Link>
      </div>
    </section>
  );
}

export default TopSellers;