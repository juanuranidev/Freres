import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import Form from './Form/Form';
import Content from './Content/Content';
import './Checkout.scss';

const Checkout = () => {
  const [payment, setPayment] = useState<boolean>(false)
  const [priceDiscount, setPriceDiscount] = useState<number>(0);

  const { orderData } = useContext(CartContext)
  
  // if(payment){
  //   return(
  //     (orderData.idOrden?? | "test") && <h1>{(orderData.IdOrden?? false)}</h1>
  //     // <h1>{orderData.IdOrder??{test : "test"}}</h1>
  //   )
  // }

  console.log(orderData)

  return (
    <div className='checkout'>
      <Form priceDiscount={priceDiscount} setPayment={setPayment} />
      <Content priceDiscount={priceDiscount} setPriceDiscount={setPriceDiscount} />
    </div>
  );
}

export default Checkout;