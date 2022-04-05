import React, { createContext, useEffect, useState } from 'react';

const initialValue = {
    cartList: [],
    openCart: false,
    cartTotal: 0
}

type CartContextType = {
    cartList: ProductModel[];
    setCartList?: (value:ProductModel) => void;
    addToCart?: (product:ProductModel, quantity:number, size: string) => void;
    deleteFromCart?: (product:ProductModel) => void;
    openCart: boolean;
    setOpenCart?: (value:boolean) => void;
    handleOpenCart?: () => void;
    handleCloseCart?: () => void;
    cartTotal: number;
    setCartTotal?: (number: number) => void;
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
    const [openCart, setOpenCart] = useState<boolean>(false);
    const [cartTotal, setCartTotal] = useState<number>(0);

    const addToCart = (product:ProductModel, quantity:number, size: string) => {
        const isInCart = cartList.find(((x) => x.id === product.id))
        if(isInCart){
            const oldCart = cartList.map((x) => {
                if (x.id === product.id) {
                    if(x.size === size){
                        return { ...product, quantity: quantity + x.quantity, size: size }
                    }
                    return { ...product, quantity: quantity, size: size }
                }
                return x
            })
            setCartList(oldCart)
        } else {
            setCartList([...cartList, {...product, quantity, size}])
        }
        handleOpenCart()
    }

    const deleteFromCart = (product:ProductModel) => {
        const target:any = cartList.find((x => x.id === product.id))
        target.quantity === 1
        ? setCartList(cartList.filter((x) => x.id !== product.id))
        : setCartList(cartList.map((x) => x.id === product.id ? { ...product, quantity: product.quantity - 1 }: x))
    }

    const handleOpenCart = () => setOpenCart(true);
    const handleCloseCart = () => setOpenCart(false);

    useEffect(() => {
        let cartTotal:number = 0
        let productTotal:number = 0
        cartList.forEach(product => {
            productTotal = product.quantity * product.price
            cartTotal += productTotal
        })
        setCartTotal(cartTotal)
    }, [cartList])


    return(
        <CartContext.Provider value={{ 
            cartList, 
            addToCart, 
            deleteFromCart, 
            openCart, 
            setOpenCart, 
            handleOpenCart,
            handleCloseCart,
            cartTotal,
            setCartTotal}}>
            {children}
        </CartContext.Provider>
    )
}
