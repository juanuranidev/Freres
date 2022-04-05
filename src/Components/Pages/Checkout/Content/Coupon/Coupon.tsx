import React, { useState, useContext } from 'react';
import { CartContext } from '../../../../Context/CartContext';
import './Coupon.scss';

interface CouponProps {
  priceDiscount: number;
  setPriceDiscount: (number:number) => void;
}

const Coupon = ({priceDiscount, setPriceDiscount}:CouponProps) => {
  const [coupon, setCoupon] = useState<string>("");
  const { cartTotal, setCartTotal } = useContext(CartContext);
  
  const handleChange = (e:React.FormEvent<HTMLInputElement>) => setCoupon(e.currentTarget.value);

  const handleSubmit = (e:React.SyntheticEvent) => {
      e.preventDefault()
      setCoupon("")

      if(coupon==="1"){
        setTimeout(() => alert("cupón válido"), 5000);
        setPriceDiscount(cartTotal - (cartTotal * 0.2))
      } else {
        alert("cupón inválido")
      }
  }

  return (
    <>   
    {priceDiscount > 0
    ? <p className='coupon'>CUPÓN DE DESCUENTO APLICADO</p>
    : <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder='Cupón de descuento'
          name="coupon"
          onChange={(e) => handleChange(e)}
          value={coupon}/>
        <button>Aplicar</button>
      </form>}
    </>
  );
}

export default Coupon;