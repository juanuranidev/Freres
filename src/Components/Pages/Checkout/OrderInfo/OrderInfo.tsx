import React, { useContext } from 'react'
import { CartContext } from '../../../Context/CartContext'

const OrderInfo = () => {
    const { orderData } = useContext(CartContext)
    
    return (
      <div>
          <h2>¡Gracias! Tu pedido ha sido recibido.</h2>
          <h2>El id de tu compra es: {orderData?.idOrden}</h2>
          <p>El monto ${orderData?.total}</p>
      </div>
    )
}

export default OrderInfo