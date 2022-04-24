import React, { useContext } from 'react';
import { CartContext, ProductModel } from '../../../Context/CartContext';
import ContentProduct from '../Content/ContentProduct/ContentProduct';
import './OrderInfo.scss';

const OrderInfo = () => {

    const { cartList, cartTotal } = useContext(CartContext);

    return (
      <div className='orderInfo'>
        <div className='orderInfo_products'>
            <h2 className='orderInfo_products_h2'>PRODUCTOS ADQUIRIDOS</h2>
            {cartList.map((product: ProductModel) => <ContentProduct {...product} key={product.id} />)}
        </div>
        <div className='orderInfo_total'>
            <p>Total: ${cartTotal}</p>
        </div>
      </div>
    );
}

export default OrderInfo;