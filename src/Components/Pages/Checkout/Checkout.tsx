import React from 'react'
import Content from './Content/Content'
import './Checkout.scss'
import Form from './Form/Form'

const Checkout = () => {
  return (
    <div className='checkout'>
      <Form/>
      <Content/>
    </div>
  )
}

export default Checkout