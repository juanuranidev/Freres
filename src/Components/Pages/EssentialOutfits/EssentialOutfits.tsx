import React, { useState } from 'react';
import { ProductModel } from '../../Context/CartContext';
import { motion } from 'framer-motion';
import Loader from '../../Loader/Loader';
import useGetProducts from '../../Hooks/useGetProducts';
import EssentialOutfit from './EssentialOutfit/EssentialOutfit';
import ModalSelectSizes from '../../ModalSelectSizes/ModalSelectSizes';
import './EssentialOutfits.scss';

const EssentialOutfits = () => {
  const [modalSelectSizes, setModalSelectSizes] = useState<boolean>(false)
  const [modalProducts, setModalProducts] = useState<ProductModel[]>([])
  const {loader, products} = useGetProducts('is_an_essential_outfit', '==', true)

  const handleOpenModalSizes = (productsForModal: ProductModel[]) => {
    setModalProducts(productsForModal)
    setModalSelectSizes(true)
  }
  
  if(loader) return <Loader/>

  return (
    <div className='essentialOutfits'>
      <motion.div
        className='essentialOutfits_div' 
        animate={{ x: 0, opacity: 1 }} 
        initial={{  x:-100, opacity: 0  }} 
        transition={{ ease: "linear", duration: 0.25 }}>
        <EssentialOutfit 
          name={'ELEGANT'} 
          imageDirection={'right'}
          link={'/outfit/elegant'} 
          products={products.filter((product:any) => product.essential_outfit==="elegant")} 
          image={'https://freres.ar/wp-content/uploads/2021/08/IMG_0350-1-uai-1440x1440.jpg'}
          handleOpenModalSizes={() => handleOpenModalSizes(products.filter((product:any) => product.essential_outfit==="elegant"))}
        /> 
        <EssentialOutfit 
          name={'RELAXED'} 
          imageDirection={'left'}
          link={'/outfit/relaxed'} 
          products={products.filter((product:any) => product.essential_outfit === "relaxed")} 
          image={'https://freres.ar/wp-content/uploads/2021/08/OUTFIT-4-scaled-uai-720x720.jpg'}
          handleOpenModalSizes={() => handleOpenModalSizes(products.filter((product:any) => product.essential_outfit === "relaxed"))}
        />
        <EssentialOutfit 
          name={'CASUAL'} 
          link={'/outfit/casual'} 
          imageDirection={'right'}
          products={products.filter((product:any) => product.essential_outfit==="casual")} 
          image={'https://freres.ar/wp-content/uploads/2021/08/OUTFIT-6-scaled-uai-720x720.jpg'}
          handleOpenModalSizes={() => handleOpenModalSizes(products.filter((product:any) => product.essential_outfit==="casual"))}
        /> 
        <EssentialOutfit 
          name={'STREET'} 
          link={'/outfit/street'} 
          imageDirection={'left'}
          products={products.filter((product:any) => product.essential_outfit==="street")} 
          image={'https://freres.ar/wp-content/uploads/2021/08/IMG_0341-1-uai-720x720.jpg'}
          handleOpenModalSizes={() => handleOpenModalSizes(products.filter((product:any) => product.essential_outfit==="street"))}
        /> 
      </motion.div>   
      {modalSelectSizes && <ModalSelectSizes modalProducts={modalProducts} />}
    </div>
  );
}

export default EssentialOutfits;