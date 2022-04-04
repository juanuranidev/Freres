import React from 'react';
import Form from './Form/Form';
import Content from './Content/Content';
import './Checkout.scss';

const Checkout = () => {
  return (
    <div className='checkout'>
      <Form/>
      <Content/>
    </div>
  );
}

export default Checkout;