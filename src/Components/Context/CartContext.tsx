import React, { createContext, useState } from 'react';


const initialValue = {
    cartList: []
}

type CartContextType = {
  cartList: Product[];
  setCartList?: (value:Product) => void;
  addToCart?: (product:Product, quantity:number, size: string) => void
}

export type Product = {
  category: string;
  description: string;
  format_of_size_chart: string;
  id: string;
  images: string[];
  name: string;
  price: number;
  quantity?: number;
  stock: number;
  top_seller: boolean;
  is_an_essential_outfit?: boolean;
  essential_outfit?: string;
  essential_outfit_image?: string;
  size: string;
}

export const CartContext = createContext<CartContextType>(initialValue)

export const CartContextProvider = ({children}:any) => {
    const [cartList, setCartList] = useState<Product[]>([])
   
    const addToCart = (product:Product, quantity:number, size: string) => {
        const isInCart = cartList.find(((x) => x.id === product.id))
        if(isInCart){
            const oldCart = cartList.map((x) => {
                if (x.id === product.id) {
                    return { ...product, quantity: (product.quantity??1) + (x.quantity??0), size }
                }
                return x
            })
            setCartList(oldCart)
        } else {
            setCartList([...cartList, {...product, quantity, size}])
        }
    }

    console.log(cartList)

    return(
        <CartContext.Provider value={{ cartList, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}
