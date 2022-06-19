import React from 'react';
import Loader from '../../../Loader/Loader';
import ProductList from '../../../ProductList/ProductList';
import PrimaryButton from '../../../Buttons/PrimaryButton/PrimaryButton';
import useGetProducts from '../../../Hooks/useGetProducts';
import './TopSellers.scss';

const TopSellers = () => {
  const {loader, products} = useGetProducts('top_seller', '==', true)

  if(loader) return <Loader/>

  return (
    <section className='topSellers'>
      <h2 className='topSellers_h2'>TOP SELLERS</h2>
      <div className='topSellers_div'>
        <ProductList products={products}/>
      </div>
      <div className='topSellers_button'>
        <PrimaryButton link="/shop/all" text="TODOS LOS PRODUCTOS"/>
      </div>
    </section>
  );
}

export default TopSellers;