import React from 'react';
import SecondaryButton from '../../../Buttons/SecondaryButton/SecondaryButton';
import './OrderStatus.scss';

const OrderStatus = () => {    
    return (
      <div className='orderStatus'>
        <div className='orderStatus_div'>
          <h2 className='orderStatus_div_h2'>¡GRACIAS!</h2>
          <p className='orderStatus_div_p'>TU PEDIDO HA SIDO RECIBIDO.</p>
          <SecondaryButton text="Volver al inicio" link="/"/>
        </div>
      </div>
    )
}

export default OrderStatus