import React, { useState, useContext } from 'react';
import { CartContext } from '../../../../Context/CartContext';
import ImageLoader from '../../../../Navbar/Logo/Img/freres.jpg'
import './Coupon.scss';

interface CouponProps {
  priceDiscount: number;
  setPriceDiscount: (number:number) => void;
}

const Coupon = ({priceDiscount, setPriceDiscount}:CouponProps) => {
  const [coupon, setCoupon] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false)
  const { cartTotal } = useContext(CartContext);
  
  const handleChange = (e:React.FormEvent<HTMLInputElement>) => setCoupon(e.currentTarget.value);

  const handleSubmit = (e:React.SyntheticEvent) => {
      e.preventDefault()
      setCoupon("")
      setLoader(true)
      if(coupon==="FRERESSECRET2022"){
        setTimeout(() =>{
          setPriceDiscount(cartTotal - (cartTotal * 0.2))
          setLoader(false)
        }, 4000);
        
      } else {
        setTimeout(() =>{
          alert("cupón inválido")
          setLoader(false)
        }, 4000);
      }
  }

  if(loader){
    return(
      <div className='formLoader'>
        <img className='formLoader_img' src={ImageLoader}/>
      </div>
    )
  }
  return (
    <>   
    {priceDiscount > 0
    ? <p className='coupon'>CUPÓN DE DESCUENTO APLICADO</p>
    : <form className='coupon_form' onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className='coupon_form_input'
          placeholder='Cupón de descuento'
          name="coupon_input"
          onChange={(e) => handleChange(e)}
          value={coupon}/>
        <button className='coupon_form_button' disabled={coupon===""} >Aplicar</button>
      </form>}
    </>
  );
}

export default Coupon;