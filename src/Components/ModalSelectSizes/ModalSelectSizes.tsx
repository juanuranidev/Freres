import React, { useState } from 'react';
import { ProductModel } from '../Context/CartContext';
import ProductSizes from '../Pages/ProductDetail/ProductSizes/ProductSizes';
import './ModalSelectSizes.scss';

interface ModalSelectSizesProps {
  modalProducts: ProductModel[],
}

const ModalSelectSizes = ({modalProducts}: ModalSelectSizesProps) => {
  const [size, setSize] = useState("")

  return (
    <div className='modalSelectSizes'>
      <h2>Selecciona el talle para</h2>
      <h2>{modalProducts[0].name}</h2>
      <img src={modalProducts[0].images[0]} style={{width: "20rem"}} />
      <ProductSizes sizeType={modalProducts[0].format_of_size_chart} size={size} setSize={setSize} />
      <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
        <p>Arrows</p>
        <button onClick={() => console.log(modalProducts)}>AGREGAR AL CARRITO</button>
      </div>
    </div>
  );
};

export default ModalSelectSizes;