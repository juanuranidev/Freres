import React, {useState, useEffect } from 'react';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import { Link, useParams, useMatch, useResolvedPath } from 'react-router-dom';
import type { LinkProps } from "react-router-dom";
import { ProductModel } from '../../Context/CartContext';
import ProductList from '../../ProductList/ProductList';
import Loader from '../../Loader/Loader';
import './Shop.scss';

function CustomLink({ children, to }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      className='shop_categories_a'
      style={{ opacity : match ? '0.6' : '1' }}>
      {children}
    </Link>
  );
}

const Shop = () => {
  const [data, setData] = useState<ProductModel[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const {idCategory} = useParams();

  useEffect(() => {
    setLoader(true)
    
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
      <div className='shop_categories'>
        <CustomLink to="/shop/camperasybuzos">CAMPERAS Y BUZOS</CustomLink>
        <CustomLink to="/shop/remeras">REMERAS</CustomLink>
        <CustomLink to="/shop/pantalones">PANTALONES Y SHORTS</CustomLink>
        <CustomLink to="/shop/calzado">CALZADO</CustomLink>
        <CustomLink to="/shop/accesorios">ACCESORIOS</CustomLink>
        <CustomLink to="/shop/all">TODOS LOS PRODUCTOS</CustomLink>
      </div>
    {loader===true
    ? <Loader/>
    : <div className='shop_div'>
        <ProductList products={data}/>
      </div>}
    </section>
  );
}

export default Shop;