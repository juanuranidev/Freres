import React from 'react';
import { motion } from 'framer-motion';
import Loader from '../../Loader/Loader';
import useGetProducts from '../../Hooks/useGetProducts';
import EssentialOutfit from './EssentialOutfit/EssentialOutfit';
import './EssentialOutfits.scss';

const EssentialOutfits = () => {
  const {loader, products} = useGetProducts('is_an_essential_outfit', '==', true)

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
        /> 
        <EssentialOutfit 
          name={'RELAXED'} 
          imageDirection={'left'}
          link={'/outfit/relaxed'} 
          products={products.filter((product:any) => product.essential_outfit === "relaxed")} 
          image={'https://freres.ar/wp-content/uploads/2021/08/OUTFIT-4-scaled-uai-720x720.jpg'}
        />
        <EssentialOutfit 
          name={'CASUAL'} 
          link={'/outfit/casual'} 
          imageDirection={'right'}
          products={products.filter((product:any) => product.essential_outfit==="casual")} 
          image={'https://freres.ar/wp-content/uploads/2021/08/OUTFIT-6-scaled-uai-720x720.jpg'}
        /> 
        <EssentialOutfit 
          name={'STREET'} 
          link={'/outfit/street'} 
          imageDirection={'left'}
          products={products.filter((product:any) => product.essential_outfit==="street")} 
          image={'https://freres.ar/wp-content/uploads/2021/08/IMG_0341-1-uai-720x720.jpg'}
        /> 
      </motion.div>   
    </div>
  );
}

export default EssentialOutfits;