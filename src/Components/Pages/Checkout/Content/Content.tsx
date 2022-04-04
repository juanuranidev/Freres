import React, { useContext } from 'react'
import { CartContext, ProductModel } from '../../../Context/CartContext'
import ArrowDown from './Img/ArrowDown.png'
import ContentProduct from './ContentProduct/ContentProduct'
import './Content.scss'

const Content = () => {
  const { cartList, cartTotal } = useContext(CartContext)
  return (
    <div className='content'>
      <div className='content_products'>
        {cartList.length >= 4 && 
        <div className='content_products_div'>
          <p className='content_products_div_p'>Más productos</p>
          <img className='content_products_div_img' src={ArrowDown} />
        </div>}
        {cartList.map((product: ProductModel) => <ContentProduct {...product} key={product.id} />)}
      </div>
      <div className='content_coupon'>
        <form>
          <input type="text" placeholder='Cupón de descuento'/>
          <button>Aplicar</button>
        </form>
      </div>
      <div className='content_subTotal'>
        <p className='content_subTotal_p'>Subtotal: ${cartTotal}</p>
        {cartTotal > 12000
        ? <p className='content_subTotal_p'>¡Envío gratis!</p>
        : <p className='content_subTotal_p'>Envío: $750</p>}
      </div>
      <div className='content_total'>
      {cartTotal > 12000
        ? <p>Total: ${cartTotal}</p>
        : <p>Total: ${cartTotal + 750}</p>}
      </div>
    </div>
  )
}

export default Content