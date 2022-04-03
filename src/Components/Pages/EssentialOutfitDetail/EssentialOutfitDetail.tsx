import React, {useState, useEffect } from 'react';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import { ProductModel } from '../../Context/CartContext';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from '../../Loader/Loader';
import ProductList from '../../ProductList/ProductList';
import './EssentialOutfitDetail.scss';

const EssentialOutfitDetail = () => {
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [loader, setLoader] = useState<boolean>(true);
    const { idOutfit } = useParams();

    useEffect(() => {
    const dataBase = getFirestore()
    const queryCollection = query(collection(dataBase, 'products'), where('essential_outfit', '==', idOutfit))
  
    getDocs(queryCollection)
      .then(res => setProducts(res.docs.map(prod => ({id: prod.id, ...prod.data()}) as ProductModel)))
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
              <img src={products[0].essential_outfit_image} className='essentialOutfitDetail_content_img' alt="Imagen de producto"/>
              <div className='essentialOutfitDetail_content_div'>
                <ProductList products={products}/>
              </div>
            </motion.div>}
      </section>
  );
}

export default EssentialOutfitDetail;