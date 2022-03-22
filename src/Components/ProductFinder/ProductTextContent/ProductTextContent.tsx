import React from 'react'
import Shipping from '../Img/Shipping.png'
import './ProductTextContent.scss'

interface ProductTextContentProps{
    name: string,
    price: number,
    description: any
}

const ProductTextContent = ({name, price, description}:ProductTextContentProps) => {
  return (
    <>
      <h1 className='productDetail_content_h1'>{name}</h1>
      <p className='productDetail_content_p'>${price}</p>
      <div className='productDetail_content_description'>
        {description.split(".").map((sentence:string, index:number) => <p className='productDetail_content_description_p' key={index} >{sentence}</p>)}
      </div>
      <div className='productDetail_content_shipping'>
        <img className='productDetail_content_shipping_img'src={Shipping}/>
        <p className='productDetail_content_shipping_p'>Envío gratis en compras mayores a $12.000 y express (sólo CABA) en menos de 48hs hábiles</p>
      </div>
    </>
  )
}

export default ProductTextContent