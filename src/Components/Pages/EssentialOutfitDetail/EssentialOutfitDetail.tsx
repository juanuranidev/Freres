import React, {useState, useEffect } from 'react';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from '../../Loader/Loader';
import ProductList from '../../ProductList/ProductList';
import './EssentialOutfitDetail.scss';

const EssentialOutfitDetail = () => {
    const [products, setProducts] = useState<any>([]);
    const [loader, setLoader] = useState<boolean>(true);
    const { idOutfit } = useParams();

    useEffect(() => {
    const dataBase = getFirestore()
    const queryCollection = query(collection(dataBase, 'products'), where('essential_outfit', '==', idOutfit))
  
    getDocs(queryCollection)
      .then(res => setProducts(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
      .catch(err => console.log(err))
      .finally(() => setLoader(false))

    }, [idOutfit]);

    return (
      <section className='essentialOutfitDetail'>
          {loader
          ? <Loader/>
          : <motion.div
              exit={{opacity: 0}}
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ ease: "linear", duration: 0.25 }}
              className='essentialOutfitDetail_content'>
              <h1 className='essentialOutfitDetail_content_h1'>{idOutfit}</h1>
              <img src={products[0].essential_outfit_image} className='essentialOutfitDetail_content_img'/>
              <div className='essentialOutfitDetail_content_div'>
                <ProductList products={products}/>
              </div>
              <video loop autoPlay={true} muted>
                <source src='https://drive.google.com/file/d/1RFgARb88gq3xOfIc1ZToU5Z4wXyMKOfh/view?usp=sharing' type="video/mp4" />
              </video>
            </motion.div>}
      </section>
  );
}

export default EssentialOutfitDetail;