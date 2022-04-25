import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import OrderStatus from './OrderStatus/OrderStatus';
import Form from './Form/Form';
import Content from './Content/Content';
import './Checkout.scss';
import OrderInfo from './OrderInfo/OrderInfo';

const Checkout = () => {
  const [loader, setLoader] = useState<boolean>(false)
  const [payment, setPayment] = useState<boolean>(false)
  const [priceDiscount, setPriceDiscount] = useState<number>(0);

  const { orderData } = useContext(CartContext)

  console.log(orderData)

  return (
    <div className='checkout'>
      {payment && orderData
      ? <OrderStatus />
      : <Form priceDiscount={priceDiscount} setPayment={setPayment} />}
      {payment && orderData
      ? <OrderInfo />
      : <Content priceDiscount={priceDiscount} setPriceDiscount={setPriceDiscount} />}      
    </div>
  );
}

export default Checkout;