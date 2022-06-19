import React from 'react';
import Loader from '../../../Loader/Loader';
import ProductList from '../../../ProductList/ProductList';
import PrimaryButton from '../../../Buttons/PrimaryButton/PrimaryButton';
import useGetProducts from '../../../Hooks/useGetProducts';
import './Masterpieces.scss';

const Masterpieces = () => {
  const {products, loader} = useGetProducts('masterpiece', '==', true)

  if(loader) return <Loader/>

  return (
    <section className='masterpieces'>
      <h2 className='masterpieces_h2'>MASTERPIECES</h2>
      <div className='masterpieces_div'>
        <ProductList products={products}/>
      </div>
      <div className='masterpieces_button'>
        <PrimaryButton link="/shop/all" text="TODOS LOS PRODUCTOS"/>
      </div>
    </section>
  );
}

export default Masterpieces;