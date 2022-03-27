// import React, { createContext, useState, useContext, useEffect } from 'react';


// const initialValue = {
//     cartList: [],
//     setCartList: () => {},
//     serCartList: () => {}
// }

// const CartContext = createContext(initialValue)

// export const CartContextProvider = ({children}:any) => {
//     const [cartList, setCartList] = useState<any>([])
   
    
//     const addToCart = (product:any) => {
//         const isInCart = cartList.find(((x:any) => x.id === product.id))
//         if(isInCart){
//             const oldCart = cartList.map((x:any) => {
//                 if (x.id === product.id) {
//                     return { ...product, quantity: product.quantity + product.quantity }
//                 }
//                 return product
//             })
//             setCartList(oldCart)
//         } else {
//             setCartList([...cartList, product])
//         }
//         console.log(cartList)
//     }

//     return(
//         <CartContext.Provider value={{ cartList, addToCart }}>
//             {children}
//         </CartContext.Provider>
//     )
// }

import React from 'react'

const CartContext = () => {
  return (
    <div>CartContext</div>
  )
}

export default CartContext