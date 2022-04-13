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
import Loader from '../../../Loader/Loader';

const ProductDetail = (product:ProductModel) => {
  const [loader, setLoader] = useState<boolean>(false)
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [size, setSize] = useState<string>("");
  const [amount, setAmount] = useState<number>(1) 

  const { addToCart } = useContext(CartContext);
  
  useEffect( () => {
    setLoader(true)
    setSize("") 
    setAmount(1)

    const dataBase = getFirestore();
    const queryCollection = query(collection(dataBase, 'products'), where('category', '==', product.category));
  
    getDocs(queryCollection)
    .then(res => setProducts(res.docs.map(prod => ({id: prod.id, ...prod.data()} as ProductModel))))
    .catch(err => console.log(err))
    .finally(() => setLoader(false))  
  }, [product]);


  const handleAddToCart = () => {
    addToCart?.(product, amount, size)
    setAmount(1);
    setSize("");
  }

  return (
    <section className='productDetail'>
      {loader
      ? <Loader/>
      : <> 
          <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className='container'>
              <ProductImages images={product.images}/>
              <div className='productDetail_content'>
                <ProductTextContent name={product.name} price={product.price} description={product.description} />
                <ProductSizes sizeType={product.format_of_size_chart} size={size} setSize={setSize} />
                <AddToCart stock={product.stock} size={size} amount={amount} setAmount={setAmount} handleAddToCart={handleAddToCart} />
                <ProductPanel title='DETALLES' text={product.name} product={product} />
                <ProductPanel title='ENVÍOS' text='Los envíos son realizados por Correo Argentino y moto mensajería. También podes retirar tu pedido gratis por nuestra oficina en CABA.' product={product}/>
                <ProductPanel title='POLÍTICA DE CAMBIOS' text='Podrás realizar un cambio hasta 10 días después de haber recibido tu compra. Los productos deberán encontrarse en el mismo estado en que fueron remitidos. Podes hacerlo acercándote a nuestras oficinas en CABA o bien abonando el envío hacia nuestra oficina, nosotros abonamos el envío a tu casa.' product={product}/>
              </div>
          </motion.div>
          <SimilarProducts product={product} products={products} />
        </>}
    </section>
  );
}

export default ProductDetail;