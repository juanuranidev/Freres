import React, { useContext } from 'react';
import { collection, getDocs, getFirestore, query, addDoc, writeBatch, where, documentId } from 'firebase/firestore';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../../Context/CartContext';
import MercadoPago from './MercadoPago/MercadoPago';
import './Form.scss';

interface IFormInputs {
  "Nombre": string;
  "Apellido": string;
  "Email": string;
  "Direccion": string;
  "Localidad_Ciudad": string;
  "Apartamento_Habitación": string;
  "Provincia": string;
  "Código_Postal": number;
  "Teléfono": number;
  "OrderId": number;
}

interface FormProps {
  priceDiscount: number;
  setPriceDiscount: (value:number) => void;
}

const Form = ({priceDiscount, setPriceDiscount}:FormProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInputs>();

  const { cartList, cartTotal } = useContext(CartContext)

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInputs> = async data => {
    
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
    console.log(order)

    // Send order
    const dataBase = getFirestore()
    const orderCollection = collection(dataBase, 'orders') 
    addDoc(orderCollection, order)
        .then(resp => {order.id= resp.id})
        .catch(err => console.log(err))
        .finally (() =>{
          // navigate(`/orderInfo/${order.id}`, { replace: true });
          reset()
        })
        // NO NAVEGAR A OTRA PÁGINA, MOSTRAR UN DIV ARRIBA DE TODO 

        
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

  return (
    <div className="form">
      <h2 className="form_h2">DETALLES DE LA FACTURACIÓN</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>  
          <label>
            <p>Nombre</p>
            <input 
            type="text" 
            placeholder="Nombre" 
            {...register("Nombre", { required: true, maxLength: 50, pattern: /^[A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s]+$/i })} />
            {errors.Nombre?.type === 'required' && <p className='required'>Campo requerido</p>}
            {errors.Nombre?.type === 'maxLength' && <p className='required'>Ingresa hasta 50 letras</p>}
            {errors.Nombre?.type === 'pattern' && <p className='required'>Ingresa sólo letras</p>}
          </label>
          <label>
            <p>Apellido</p>
            <input 
            type="text" 
            placeholder="Apellido" 
            {...register("Apellido", { required: true, maxLength: 50, pattern: /^[A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s]+$/i} )} />
            {errors.Apellido?.type === 'required' && <p className='required'>Campo requerido</p>}
            {errors.Apellido?.type === 'maxLength' && <p className='required'>Ingresa hasta 50 letras</p>}
            {errors.Apellido?.type === 'pattern' && <p className='required'>Ingresa sólo letras</p>}
          </label>
          <label>
            <p>Email</p>
            <input 
            type="email" 
            placeholder="Email" 
            {...register("Email", { required: true, maxLength: 50 })} />
            {errors.Email?.type === 'required' && <p className='required'>Campo requerido</p>}
            {errors.Email?.type === 'maxLength' && <p className='required'>Ingresa hasta 50 letras</p>}
          </label>
          <label>
            <p>Dirección</p>
            <input 
            type="text" 
            placeholder="Dirección" 
            {...register("Direccion", { required: true, maxLength: 100, pattern: /^[0-9-A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s-/-*.,-]+$/i })} />
            {errors.Direccion?.type === 'required' && <p className='required'>Campo requerido</p>}
            {errors.Direccion?.type === 'maxLength' && <p className='required'>Ingresa hasta 100 letras</p>}
            {errors.Direccion?.type === 'pattern' && <p className='required'>Ingrese un formato válido</p>}
          </label>
          <label>
            <p>Apartamento, habitación, etc. (opcional)</p>
            <input 
            type="text" 
            placeholder="Apartamento, habitación, etc. (opcional)" 
            {...register("Apartamento_Habitación", { required: false, maxLength: 50, pattern: /^[0-9-A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s-/-*.,-]+$/i })} />
            {errors.Apartamento_Habitación?.type === 'maxLength' && <p className='required'>Ingresa hasta 50 letras</p>}
            {errors.Apartamento_Habitación?.type === 'pattern' && <p className='required'>Ingrese un formato válido</p>}
          </label>
        </div>
        <div>
          <label>
            <p>Localidad/Ciudad</p>
            <input 
            type="text" 
            placeholder="Localidad/Ciudad" 
            {...register("Localidad_Ciudad", { required: true,  maxLength: 50, pattern: /^[0-9-A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s-/-*.,-]+$/i })} />
            {errors.Localidad_Ciudad?.type === 'required' && <p className='required'>Campo requerido</p>}
            {errors.Localidad_Ciudad?.type === 'maxLength' && <p className='required'>Ingresa hasta 50 letras</p>}
            {errors.Localidad_Ciudad?.type === 'pattern' && <p className='required'>Ingrese un formato válido</p>}
          </label>
          <label>
          <p>Provincia</p>
            <input 
            type="text" 
            placeholder="Provincia" 
            {...register("Provincia", { required: true, maxLength: 50, pattern: /^[0-9-A-Za-z-ZñÑáéíóúÁÉÍÓÚ\s-/-*.,-]+$/i })} /> 
            {errors.Provincia?.type === 'required' && <p className='required'>Campo requerido</p>}
            {errors.Provincia?.type === 'maxLength' && <p className='required'>Ingresa hasta 50 letras</p>}
            {errors.Provincia?.type === 'pattern' && <p className='required'>Ingrese un formato válido</p>}
          </label>
          <label>
            <p>Código Postal </p>
            <input 
            type="number" 
            placeholder="Código Postal" 
            {...register("Código_Postal", { required: true, maxLength: 20 })} />
            {errors.Código_Postal?.type === 'required' && <p className='required'>Campo requerido</p>}
            {errors.Código_Postal?.type === 'maxLength' && <p className='required'>Ingresa hasta 20 números</p>}
          </label>
          <label>
            <p>Teléfono</p>
            <input 
            type="number" 
            placeholder="Teléfono" 
            {...register("Teléfono", { required: true, maxLength: 20 })} />
            {errors.Teléfono?.type === 'required' && <p className='required'>Campo requerido</p>}
            {errors.Teléfono?.type === 'maxLength' && <p className='required'>Ingresa hasta 20 números</p>}
          </label>
          <label className='button'>
            {cartList.length === 0
            ? <p className='disabled'>CARRITO VACÍO</p>
            : <button type="submit">REALIZAR PEDIDO</button>}
          </label>
        </div>   
      </form>    
      <Link className="form_a" to="/">
        <p className="form_a_p">VOLVER AL INICIO</p>
      </Link>
      <div className="form_mercadoPago">
        <MercadoPago/>
      </div>
    </div>
  );
}

export default Form;