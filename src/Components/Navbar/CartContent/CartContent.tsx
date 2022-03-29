import React, { useEffect, useState } from 'react';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import './CartContent.scss';
import CartItem from './CartItem/CartItem';

interface CartContentProps {
    openCart: boolean;
    handleCloseCart: () => void
}

const CartContent = ({openCart, handleCloseCart}: CartContentProps) => {  
  const [data, setData] = useState<any>([])

  useEffect(() => {
    const dataBase = getFirestore()
    const queryCollection = query(collection(dataBase, 'products'), where('top_seller', '==', true))
    getDocs(queryCollection)
        .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch(err => console.log(err))
      }, []);

      console.log(data)

    return (
    <div className={openCart===true ? 'cartOpen' : 'cartClose'}>
        <div className='cart_close'>
          <p onClick={handleCloseCart}>CERRAR</p>
        </div>
        <div className='cart_shipping'>
          <p>$123 más para tener envío gratis</p>
        </div>
        {/* <div className='cart_empty'>
          <p>Tu carrito está vacío.</p>
        </div> */}
        <div className='cart_products'>
        <CartItem products={data}/>
        </div>
    </div>
  )
}

export default CartContent;