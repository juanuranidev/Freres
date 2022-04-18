import React, { useState } from 'react';
import Form from './Form/Form';
import Content from './Content/Content';
import './Checkout.scss';

const Checkout = () => {
const [payment, setPayment] = useState<boolean>(false)
const [priceDiscount, setPriceDiscount] = useState<number>(0);

  if(payment === true ) {
    return(
      <div className='paymentMade'>
        <h1>Pago realizado</h1>
      </div>
    )
  }

  return (
    <div className='checkout'>
      <Form priceDiscount={priceDiscount} setPriceDiscount={setPriceDiscount}/>
      <Content priceDiscount={priceDiscount} setPriceDiscount={setPriceDiscount} />
    </div>
  );
}

export default Checkout;