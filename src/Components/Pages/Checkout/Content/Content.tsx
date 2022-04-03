import React, { useContext } from 'react'
import { CartContext, ProductModel } from '../../../Context/CartContext'
import ContentProduct from './ContentProduct/ContentProduct'
import './Content.scss'

const Content = () => {
  const { cartList } = useContext(CartContext)
  return (
    <div className='content'>
        <h1>Test</h1>
        <div>
          {cartList.map((product: ProductModel) => <ContentProduct {...product} key={product.id} />)}
        </div>
    </div>
  )
}

export default Content