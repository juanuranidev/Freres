import React, { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../Context/CartContext';
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
  setPayment: (value: boolean) => void;
}

const Form = ({priceDiscount, setPayment}:FormProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInputs>();

  const { cartList, cartTotal, handlePurchase } = useContext(CartContext)

  const onSubmit: SubmitHandler<IFormInputs> = async data => {
    handlePurchase?.(data, cartList, cartTotal, priceDiscount)
    setPayment(true)
    reset()
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
      <div className="form_border"/>
    </div>
  );
}

export default Form;