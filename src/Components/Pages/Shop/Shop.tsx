import React, {useState, useEffect } from 'react';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import { Link, useParams, useMatch, useResolvedPath } from 'react-router-dom';
import type { LinkProps } from "react-router-dom";
import { ProductModel } from '../../Context/CartContext';
import ButtonCategories from './ButtonCategories/ButtonCategories';
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
  const {idCategory} = useParams();
  const [data, setData] = useState<ProductModel[]>([]);
  const [loader, setLoader] = useState<boolean>(true);

  const handleGetProducts = async () => {
    setLoader(true)
    
    const dataBase = getFirestore();
    let queryCollection

    idCategory==="all"
    ? queryCollection = query(collection(dataBase, 'products'))
    : queryCollection = query(collection(dataBase, 'products'), where('category', '==', idCategory))
    
    await getDocs(queryCollection)
      .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}) as ProductModel)))
      .catch(err => console.log(err))
    
    setLoader(false)
  }

  useEffect(() => {
    handleGetProducts();
  }, [idCategory]);

  if(loader){
    return <Loader/>
  }

  return (
    <section className='shop'>
      <div className='shop_categories'>
        <ButtonCategories />
        <CustomLink to="/shop/all">TODOS LOS PRODUCTOS</CustomLink>
        <div className='shop_categories_div'>
          <CustomLink to="/shop/camperasybuzos">CAMPERAS Y BUZOS</CustomLink>
          <CustomLink to="/shop/remeras">REMERAS</CustomLink>
          <CustomLink to="/shop/pantalones">PANTALONES Y SHORTS</CustomLink>
          <CustomLink to="/shop/calzado">CALZADO</CustomLink>
          <CustomLink to="/shop/accesorios">ACCESORIOS</CustomLink>
        </div>
      </div>
      <div className='shop_div'>
        <ProductList products={data}/>
      </div>
    </section>
  );
}

export default Shop;