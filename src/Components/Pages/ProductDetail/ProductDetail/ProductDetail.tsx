import React, { useState, useEffect, useContext } from 'react';
import { CartContext, ProductModel } from '../../../Context/CartContext'
import { motion } from 'framer-motion';
import Loader from '../../../Loader/Loader';
import AddToCart from '../AddToCart/AddToCart';
import ProductSizes from '../ProductSizes/ProductSizes';
import ProductPanel from '../ProductPanel/ProductPanel';
import ProductImages from '../ProductImages/ProductImages';
import useGetProducts from '../../../Hooks/useGetProducts';
import SimilarProducts from '../SimilarProducts/SimilarProducts';
import ProductTextContent from '../ProductTextContent/ProductTextContent';
import './ProductDetail.scss';

interface ProductDetailProps {
  product: ProductModel;
}

const ProductDetail = ({product}:ProductDetailProps) => {
  const [size, setSize] = useState<string>("");
  const [amount, setAmount] = useState<number>(1) 

  const { addToCart, setPayment } = useContext(CartContext);
  const { loader, products } = useGetProducts('category', '==', product.category)

  useEffect( () => {
    setSize("") 
    setAmount(1)
  }, [product]);

  const handleAddToCart = () => {
    addToCart?.(product, amount, size)
    setAmount(1);
    setSize("");
    setPayment?.(false)
  }

  if(loader) return <Loader/>

  return (
    <section className='productDetail'>
      <React.Fragment> 
        <motion.div 
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.25 }}
          initial={{ x: -100, opacity: 0 }}
          className='container'>
          <ProductImages images={product.images}/>
          <div className='productDetail_content'>
            <ProductTextContent name={product.name} price={product.price} description={product.description} />
            <ProductSizes sizeType={product.format_of_size_chart} size={size} setSize={setSize} />
            <AddToCart stock={product.stock} size={size} amount={amount} setAmount={setAmount} handleAddToCart={handleAddToCart} />
            <ProductPanel title='DETALLES' text={product.name} product={product} />
            <ProductPanel title='ENV??OS' text='Los env??os son realizados por Correo Argentino y moto mensajer??a. Tambi??n podes retirar tu pedido gratis por nuestra oficina en CABA.' product={product}/>
            <ProductPanel title='POL??TICA DE CAMBIOS' text='Podr??s realizar un cambio hasta 10 d??as despu??s de haber recibido tu compra. Los productos deber??n encontrarse en el mismo estado en que fueron remitidos. Podes hacerlo acerc??ndote a nuestras oficinas en CABA o bien abonando el env??o hacia nuestra oficina, nosotros abonamos el env??o a tu casa.' product={product}/>
          </div>
        </motion.div>
        <SimilarProducts product={product} products={products} />
      </React.Fragment>
    </section>
  );
}

export default ProductDetail;