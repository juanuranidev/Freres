import React, { useState, useEffect } from 'react'
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import { ProductModel } from '../../Context/CartContext';
import { motion } from 'framer-motion';
import Loader from '../../Loader/Loader';
import EssentialOutfit from './EssentialOutfit/EssentialOutfit';
import './EssentialOutfits.scss';

const EssentialOutfits = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    const dataBase = getFirestore()
    const queryCollection = query(collection(dataBase, 'products'), where('is_an_essential_outfit', '==', true))
    getDocs(queryCollection)
        .then(res => setProducts(res.docs.map(prod => ({id: prod.id, ...prod.data()}) as ProductModel)))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
      }, []);

  return (
    <div className='essentialOutfits'>
    {loader
    ? <Loader/>
    : <motion.div className='essentialOutfits_div' 
        animate={{ x: 0, opacity: 1 }} 
        initial={{  x:-100, opacity: 0  }} 
        transition={{ ease: "linear", duration: 0.25 }}>
        <EssentialOutfit image={'https://freres.ar/wp-content/uploads/2021/08/IMG_0350-1-uai-1440x1440.jpg'} name={'ELEGANT'} link={'/outfit/elegant'} products={products.filter((product:any) => product.essential_outfit==="elegant")} imageDirection={'right'} />
        <EssentialOutfit image={'https://freres.ar/wp-content/uploads/2021/08/OUTFIT-4-scaled-uai-720x720.jpg'} name={'RELAXED'} link={'/outfit/relaxed'} products={products.filter((product:any) => product.essential_outfit==="relaxed")} imageDirection={'left'} />
        <EssentialOutfit image={'https://freres.ar/wp-content/uploads/2021/08/OUTFIT-6-scaled-uai-720x720.jpg'} name={'CASUAL'} link={'/outfit/casual'} products={products.filter((product:any) => product.essential_outfit==="casual")} imageDirection={'right'} />
        <EssentialOutfit image={'https://freres.ar/wp-content/uploads/2021/08/IMG_0341-1-uai-720x720.jpg'} name={'STREET'} link={'/outfit/street'} products={products.filter((product:any) => product.essential_outfit==="street")} imageDirection={'left'} />
      </motion.div>}     
    </div>
  );
}

export default EssentialOutfits;