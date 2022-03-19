import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from '../Loader/Loader';
import ProductSizes from './ProductSizes/ProductSizes';
import AddToCart from './AddToCart/AddToCart';
import ProductImages from './ProductImages/ProductImages';
import Shipping from './Img/Shipping.png'
import './ProductDetail.scss';

const ProductDetail = () => {
    const [product, setProduct] = useState<any>({})
    const [loader, setLoader] = useState<boolean>(true)
    const {idProduct}:any = useParams()

    useEffect(() => {
        const dataBase = getFirestore()
        const queryProd = doc (dataBase, 'products', idProduct)
        getDoc(queryProd)
          .then(resp => setProduct({id: resp.id, ...resp.data()}))
          .catch(err => console.log(err))
          .finally(() => setLoader(false))
      }, [idProduct])

    return (
      <section className='productDetail'>
          {loader
            ? <Loader/>
            : <motion.div 
                initial={{  x:-100, opacity: 0  }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "linear", duration: 0.25 }}
                className='container'>
                <ProductImages images={product.images}/>
                <div className='productDetail_content'>
                  <h1 className='productDetail_content_h1'>{product.name}</h1>
                  <p className='productDetail_content_p'>${product.price}</p>
                  <div className='productDetail_content_description'>
                    <p className='productDetail_content_description_p'>{product.description}</p> 
                  </div>
                  <div className='productDetail_content_shipping'>
                    <img  className='productDetail_content_shipping_img'src={Shipping}/>
                    <p className='productDetail_content_shipping_p'>Envío gratis en compras mayores a $12.000 y express (sólo CABA) en menos de 48hs hábiles</p>
                  </div>
                  <ProductSizes size={product.format_of_size_chart} />
                  <AddToCart stock={product.stock} />
                </div>
              </motion.div>}
      </section>
    );
}

export default ProductDetail;