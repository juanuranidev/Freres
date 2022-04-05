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
      if(coupon==="1"){
        setTimeout(() =>{
          setPriceDiscount(cartTotal - (cartTotal * 0.2))
          setLoader(false)
        }, 5000);
        
      } else {
        setTimeout(() =>{
          alert("cupón inválido")
          setLoader(false)
        }, 5000);
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