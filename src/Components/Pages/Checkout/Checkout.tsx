import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import OrderInfo from './OrderInfo/OrderInfo';
import Form from './Form/Form';
import Content from './Content/Content';
import './Checkout.scss';

const Checkout = () => {
  const [payment, setPayment] = useState<boolean>(false)
  const [priceDiscount, setPriceDiscount] = useState<number>(0);

  const { orderData } = useContext(CartContext)

  console.log(orderData)

  return (
    <div className='checkout'>
      {payment && orderData
      ? <OrderInfo />
      : <Form priceDiscount={priceDiscount} setPayment={setPayment} />

      }
      <Content priceDiscount={priceDiscount} setPriceDiscount={setPriceDiscount} />
    </div>
  );
}

export default Checkout;