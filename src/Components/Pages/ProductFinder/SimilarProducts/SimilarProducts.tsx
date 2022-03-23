import React from 'react'
import ProductList from '../../../ProductList/ProductList'
import './SimilarProducts.scss'

const SimilarProducts = ({products}: any) => {
  return (
    <div className='similarProducts'>
        <h2 className='similarProducts_h2'>TAMBIÉN TE PUEDE GUSTAR</h2>
        <div className='similarProducts_div'>
            <ProductList products={products}/>
        </div>
    </div>
  )
}

export default SimilarProducts