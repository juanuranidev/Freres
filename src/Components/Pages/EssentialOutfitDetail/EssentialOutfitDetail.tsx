import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from '../../Loader/Loader';
import ProductList from '../../ProductList/ProductList';
import useGetProducts from '../../Hooks/useGetProducts';
import TertiaryButton from '../../Buttons/TertiaryButton/TertiaryButton';
import ModalSelectSizes from '../../Modals/ModalSelectSizes/ModalSelectSizes';
import './EssentialOutfitDetail.scss';
import ModalBackground from '../../Modals/ModalBackground/ModalBackground';

const EssentialOutfitDetail = () => {
  const { idOutfit } = useParams();
  const {loader, products} = useGetProducts('essential_outfit', '==', idOutfit)
  const [modalSelectSizes, setModalSelectSizes] = useState(false)

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
          <h1 className='essentialOutfitDetail_content_h1'>{idOutfit} Outfit</h1>
          <img src={products[0].essential_outfit_image} className='essentialOutfitDetail_content_img' alt="Imagen de producto"/>
          <TertiaryButton text="AGREGAR AL CARRITO" onClick={() => setModalSelectSizes(true)}/>
        </div>
        <div className='essentialOutfitDetail_content_products'>
          <ProductList products={products}/>
        </div> 
      </motion.div>
      <ModalSelectSizes 
        open={modalSelectSizes}
        modalProducts={products}
        close={() => setModalSelectSizes(false)}
      />
      <ModalBackground 
        open={modalSelectSizes}
        close={() => setModalSelectSizes(false)}
      />
    </section>
  );
}

export default EssentialOutfitDetail;