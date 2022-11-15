import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from '../../Loader/Loader';
import ProductList from '../../ProductList/ProductList';
import useGetProducts from '../../Hooks/useGetProducts';
import './EssentialOutfitDetail.scss';

const EssentialOutfitDetail = () => {
  const { idOutfit } = useParams();
  const {loader, products} = useGetProducts('essential_outfit', '==', idOutfit)

  if(loader) return <Loader/>
  
  return (
    <section className='essentialOutfitDetail'>
      <motion.div
        exit={{opacity: 0}}
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ ease: "linear", duration: 0.25 }}
        className='essentialOutfitDetail_content'
      >
        <div className='essentialOutfitDetail_content_div'>
          {/* <h1 className='essentialOutfitDetail_content_h1'>{idOutfit}</h1> */}
          <img src={products[0].essential_outfit_image} className='essentialOutfitDetail_content_img' alt="Imagen de producto"/>
        </div>
        <div className='essentialOutfitDetail_content_products'>
          <ProductList products={products}/>
        </div> 
      </motion.div>
    </section>
  );
}

export default EssentialOutfitDetail;