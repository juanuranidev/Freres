import React, {useState, useEffect } from 'react';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import { ProductModel } from '../../Context/CartContext';
import { useParams } from 'react-router-dom';
import Loader from '../../Loader/Loader';
import ProductList from '../../ProductList/ProductList';
import './Shop.scss';

const Shop = () => {
  const [data, setData] = useState<ProductModel[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const {idCategory} = useParams();
  
  useEffect(() => {
    const dataBase = getFirestore();
    
    let queryCollection
    
    idCategory==="all"
    ? queryCollection = query(collection(dataBase, 'products'))
    : queryCollection = query(collection(dataBase, 'products'), where('category', '==', idCategory))

    getDocs(queryCollection)
      .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}) as ProductModel)))
      .catch(err => console.log(err))
      .finally(() => setLoader(false))
  }, [idCategory]);

  return (
    <section className='shop'>
    {loader===true
    ? <Loader/>
    : <div className='shop_div'>
        <ProductList products={data}/>
      </div>}
    </section>
  );
}

export default Shop;