import React from 'react'
import { ProductModel } from '../../../../Context/CartContext'

const ContentProduct = (product: ProductModel) => {
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  )
}

export default ContentProduct