import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from '../Loader/Loader';
import ProductSizes from './ProductSizes/ProductSizes';
import AddToCart from './AddToCart/AddToCart';
import ProductImages from './ProductImages/ProductImages';
import ProductTextContent from './ProductTextContent/ProductTextContent';
import './ProductDetail.scss';
import ProductPanel from './ProductPanel/ProductPanel';

const ProductDetail = () => {
  const [loader, setLoader] = useState<boolean>(true)
  const [product, setProduct] = useState<any>({})
  const [size, setSize] = useState<any>("")
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
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "linear", duration: 0.25 }}
          className='container'>
          <ProductImages images={product.images}/>
          <div className='productDetail_content'>
            <ProductTextContent name={product.name} price={product.price} description={product.description} />
            <ProductSizes productSize={product.format_of_size_chart} size={size} setSize={setSize} />
            <AddToCart stock={product.stock} />
            <ProductPanel title='DETALLES' text='lorem lorem lorem lorem'/>
            <ProductPanel title='ENVÍOS' text='Los envíos son realizados por Correo Argentino y moto mensajería. También podes retirar tu pedido gratis por nuestra oficina en CABA.'/>
            <ProductPanel title='POLÍTICA DE CAMBIOS' text='Podrás realizar un cambio hasta 10 días después de haber recibido tu compra. Los productos deberán encontrarse en el mismo estado en que fueron remitidos. Podes hacerlo acercándote a nuestras oficinas en CABA o bien abonando el envío hacia nuestra oficina, nosotros abonamos el envío a tu casa.'/>
          </div>
        </motion.div>}
    </section>
  );
}

export default ProductDetail;