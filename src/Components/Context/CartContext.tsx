import React, { createContext, useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, addDoc, writeBatch, where, documentId } from 'firebase/firestore';

const initialValue = {
    cartList: [],
    openCart: false,
    cartTotal: 0,
    orderData: {}
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
    setCartTotal?: (number:number) => void;
    orderData?: {};
    setOrderData?: (order:any) => void;
    handlePurchase?: (data:any, cartList:ProductModel[], cartTotal: number, priceDiscount: number) => void;
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
    const [orderData, setOrderData] = useState<any>({})

    const addToCart = (product:ProductModel, quantity:number, size: string) => {
        const isInCart = cartList.find(((x) => x.id === product.id))
        if(isInCart){
            const newCart = cartList.map((x) => {
                if (x.id === product.id) {
                    if(x.size === size){
                        return { ...product, quantity: quantity + x.quantity, size: size }
                    }
                    return { ...product, quantity: quantity, size: size }
                }
                return x
            })
            setCartList(newCart)
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


    const handlePurchase = (data:any, cartList:ProductModel[], cartTotal: number, priceDiscount: number) => {
        let order:any = {}
    
        order.comprador = {
          Nombre: data.Nombre,
          Apellido: data.Apellido,
          Email: data.Email,
          Direccion: data.Direccion,
          Localidad_Ciudad: data.Localidad_Ciudad,
          Apartamento_Habitación: data.Apartamento_Habitación,
          Provincia: data.Provincia,
          Código_Postal: data.Código_Postal,
          Teléfono: data.Teléfono,
        }
    
        order.productos = cartList.map(cartItem => {
          const id = cartItem.id;
          const name = cartItem.name;
          const price = cartItem.price * cartItem.quantity;
          const quantity = cartItem.quantity;
          return {id, name, price, quantity}
        })
    
        if(priceDiscount > 0){
          order.total = priceDiscount
        } else if(priceDiscount === 0 && cartTotal >= 12000){
          order.total = cartTotal
        } else if(priceDiscount === 0 && cartTotal < 12000){
          order.total = cartTotal + 750
        }
    
        alert("datos enviados")
        order.IdOrden = ((Math.floor(Math.random() * 123)) * Date.now() * (Math.floor((123 + Math.random()) * 123))).toString()
    
        const dataBase = getFirestore()
        const orderCollection = collection(dataBase, 'orders') 
        addDoc(orderCollection, order)
            .catch(err => console.log(err))
            .finally (() =>{
              console.log(order)
              setOrderData(order)
            })

                 // .finally (() => reset())
        // .then(resp => setInputs({...inputs, orderId: resp.id}))
      // // Update stock
      // const queryCollection = collection(dataBase, 'items')
      // const queryUpdateStock = query(queryCollection, where(documentId(), 'in', cartList.map(it => it.id)))
      // const batch = writeBatch(dataBase)    
      // await getDocs (queryUpdateStock)
      //     .then(resp => resp.docs.forEach(res => batch.update(res.ref, {stock: res.data().stock - cartList.find(item => item.id === res.id).quantity})))
      //     .catch(err => console.log(err))
      //     .finally(() => {
      //     setPaymentFinished(true);
      //     const successfulPurchase = () => toast.success('Compra realizada con éxito');
      //     successfulPurchase()
      //     })
      // batch.commit()
    }

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
            setCartTotal,
            orderData,
            setOrderData,
            handlePurchase}}>
            {children}
        </CartContext.Provider>
    )
}
