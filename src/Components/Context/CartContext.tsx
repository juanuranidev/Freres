import React, { createContext, useState } from 'react';


const initialValue = {
    cartList: []
}

type CartContextType = {
  cartList: ProductModel[];
  setCartList?: (value:ProductModel) => void;
  addToCart?: (product:ProductModel, quantity:number, size: string) => void
}

export type ProductModel = {
  category: string;
  description: string;
  format_of_size_chart: string;
  id: string;
  images: string[];
  name: string;
  price: number;
  quantity: number;
  stock: number;
  top_seller: boolean;
  is_an_essential_outfit?: boolean;
  essential_outfit?: string;
  essential_outfit_image?: string;
  size: string;
}

export const CartContext = createContext<CartContextType>(initialValue)

export const CartContextProvider = ({children}:any) => {
    const [cartList, setCartList] = useState<ProductModel[]>([])
   
    const addToCart = (product:ProductModel, quantity:number, size: string) => {
        const isInCart = cartList.find(((x) => x.id === product.id))
        if(isInCart){
            const oldCart = cartList.map((x) => {
                if (x.id === product.id) {
                    return { ...product, quantity: quantity + x.quantity, size }
                }
                return x
            })
            setCartList(oldCart)
        } else {
            setCartList([...cartList, {...product, quantity, size}])
        }
        console.log(quantity, size)
    }

    console.log(cartList)

    return(
        <CartContext.Provider value={{ cartList, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}
