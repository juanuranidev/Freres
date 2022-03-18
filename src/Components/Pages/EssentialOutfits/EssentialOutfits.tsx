import React, { useState, useEffect } from 'react'
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import { motion } from 'framer-motion';
import Loader from '../../Loader/Loader';
import EssentialOutfit from './EssentialOutfit/EssentialOutfit';
import './EssentialOutfits.scss';

const EssentialOutfits = () => {
  const [data, setData] = useState<any>([])
  const [loader, setLoader] = useState<boolean>(true)

  useEffect(() => {
    const dataBase = getFirestore()
    const queryCollection = query(collection(dataBase, 'products'), where('is_an_essential_outfit', '==', true))
    getDocs(queryCollection)
        .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
      }, []);

  return (
    <div className='essentialOutfits'>
    {loader
    ? <Loader/>
    : <motion.div className='essentialOutfits_div' initial={{  x:-100, opacity: 0  }} animate={{ x: 0, opacity: 1 }} transition={{ ease: "linear", duration: 0.25 }}>
        <EssentialOutfit image={'https://freres.ar/wp-content/uploads/2021/08/IMG_0350-1-uai-1440x1440.jpg'} name=  {'ELEGANT'} products={data.filter((product:any) => product.essential_outfit==="elegant")} imageDirection={'right'} />
        <EssentialOutfit image={'https://freres.ar/wp-content/uploads/2021/08/OUTFIT-4-scaled-uai-720x720.jpg'} name={'RELAXED'} products={data.filter((product:any) => product.essential_outfit==="relaxed")} imageDirection={'left'} />
        <EssentialOutfit image={'https://freres.ar/wp-content/uploads/2021/08/OUTFIT-6-scaled-uai-720x720.jpg'} name={'CASUAL'} products={data.filter((product:any) => product.essential_outfit==="casual")} imageDirection={'right'} />
        <EssentialOutfit image={'https://freres.ar/wp-content/uploads/2021/08/IMG_0341-1-uai-720x720.jpg'} name=  {'STREET'} products={data.filter((product:any) => product.essential_outfit==="street")} imageDirection={'left'} />
      </motion.div>}     
    </div>
  );
}

export default EssentialOutfits;