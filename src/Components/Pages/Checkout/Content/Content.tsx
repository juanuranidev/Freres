import React, { useContext } from 'react';
import { CartContext, ProductModel } from '../../../Context/CartContext';
import ContentProduct from './ContentProduct/ContentProduct';
import MercadoPago from './MercadoPago/MercadoPago';
import Coupon from './Coupon/Coupon';
import './Content.scss';

interface ContentProps {
  priceDiscount: number;
  setPriceDiscount: (value:number) => void;
}

const Content = ({priceDiscount, setPriceDiscount}: ContentProps) => {
  const { cartList, cartTotal } = useContext(CartContext);
  
  return (
    <div className='content'>
      <div className='content_products'>
        {cartList.map((product: ProductModel) => <ContentProduct {...product} key={product.id} />)}
      </div>
      <div className='content_coupon'>
        <Coupon priceDiscount={priceDiscount} setPriceDiscount={setPriceDiscount} />
      </div>
      <div className='content_subTotal'>
        {priceDiscount > 0
        ? <p className='content_subTotal_withDiscount'>Subtotal: ${(cartTotal).toLocaleString("ar")}</p>
        : <p className='content_subTotal_p'>Subtotal: ${(cartTotal).toLocaleString("ar")}</p>}
        {priceDiscount > 0 && priceDiscount >= 12000 && <p className='content_subTotal_discount'>Subtotal: ${(priceDiscount).toLocaleString("ar")}</p>}
        {priceDiscount > 0 && priceDiscount < 12000 && <p className='content_subTotal_discount'>Subtotal: ${(priceDiscount - 750).toLocaleString("ar")}</p>}        
        {cartTotal >= 12000
        ? <p className='content_subTotal_p'>¡Envío gratis!</p>
        : <p className='content_subTotal_p'>Envío: $750</p>}
      </div>
      <div className='content_total'>
        {priceDiscount > 0 && <p>Total: ${(priceDiscount).toLocaleString("ar")}</p>}
        {cartTotal < 12000 && priceDiscount === 0 && <p>Total: ${(cartTotal + 750).toLocaleString("ar")}</p>}
        {cartTotal >= 12000 && priceDiscount === 0 && <p>Total: ${(cartTotal).toLocaleString("ar")}</p>}
      </div>
      <MercadoPago/>
    </div>
  );
}

export default Content;