import React, { useState, useEffect, useContext } from 'react';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import { CartContext, ProductModel } from '../../../Context/CartContext'
import { motion } from 'framer-motion';
import ProductSizes from '../ProductSizes/ProductSizes';
import AddToCart from '../AddToCart/AddToCart';
import ProductImages from '../ProductImages/ProductImages';
import ProductTextContent from '../ProductTextContent/ProductTextContent';
import ProductPanel from '../ProductPanel/ProductPanel';
import SimilarProducts from '../SimilarProducts/SimilarProducts';
import './ProductDetail.scss';

const ProductDetail = (product:ProductModel) => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [size, setSize] = useState<string>("");

  const { addToCart } = useContext(CartContext);
  
  useEffect( () => {
    const dataBase = getFirestore();
    const queryCollection = query(collection(dataBase, 'products'), where('category', '==', product.category));
  
    getDocs(queryCollection)
    .then(res => setProducts(res.docs.map(prod => ({id: prod.id, ...prod.data()} as ProductModel))))
    .catch(err => console.log(err))
  }, [product.category]);

  return (
    <section className='productDetail'>
      <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.25 }}
          className='container'>
          <ProductImages images={product.images}/>
          <div className='productDetail_content'>
            <ProductTextContent name={product.name} price={product.price} description={product.description} />
            <ProductSizes sizeType={product.format_of_size_chart} size={size} setSize={setSize} />
            <AddToCart product={product} stock={product.stock} size={size} setSize={setSize} addToCart={addToCart} />
            <ProductPanel title='DETALLES' text='lorem lorem lorem lorem'/>
            <ProductPanel title='ENVÍOS' text='Los envíos son realizados por Correo Argentino y moto mensajería. También podes retirar tu pedido gratis por nuestra oficina en CABA.'/>
            <ProductPanel title='POLÍTICA DE CAMBIOS' text='Podrás realizar un cambio hasta 10 días después de haber recibido tu compra. Los productos deberán encontrarse en el mismo estado en que fueron remitidos. Podes hacerlo acercándote a nuestras oficinas en CABA o bien abonando el envío hacia nuestra oficina, nosotros abonamos el envío a tu casa.'/>
          </div>
      </motion.div>
          <SimilarProducts product={product} products={products} setSize={setSize} />
    </section>
  );
}

export default ProductDetail;