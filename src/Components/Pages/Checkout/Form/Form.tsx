import React from 'react';
import { useForm, SubmitHandler  } from 'react-hook-form';
import { Link } from 'react-router-dom';
import MercadoPago from './MercadoPago/MercadoPago';
import './Form.scss';

interface IFormInputs {
  "Nombre": string;
  "Apellido": string;
  "Email": string;
  "Dirección": string;
  "Localidad/Ciudad": string;
  "Apartamento/habitación": string;
  "Provincia": string;
  "Código Postal": number;
  "Teléfono": number;
  "SuscribirseAlNewsletter": string;
}

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = data => {
    console.log(data)
    alert("datos enviados")
  }

  return (
    <div className="form">
      <h2 className="form_h2">DETALLES DE LA FACTURACIÓN</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>  
          <label>
            <p>Nombre</p>
            <input type="text" placeholder="Nombre" {...register("Nombre", {required: true, maxLength: 20})} />
            {errors.Nombre?.type === 'required' && <p className='required'>Campo requerido</p>}
          </label>
          <label>
            <p>Apellido</p>
            <input type="text" placeholder="Apellido" {...register("Apellido", {required: true, maxLength: 100})} />
            {errors.Nombre?.type === 'required' && <p className='required'>Campo requerido</p>}
          </label>
          <label>
            <p>Email</p>
            <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
            {errors.Nombre?.type === 'required' && <p className='required'>Campo requerido</p>}
          </label>
          <label>
            <p>Dirección</p>
            <input type="text" placeholder="Dirección" {...register("Dirección", {required: true})} />
            {errors.Nombre?.type === 'required' && <p className='required'>Campo requerido</p>}
          </label>
          <label>
            <p>Apartamento, habitación, etc. (opcional)</p>
            <input type="text" placeholder="Apartamento, habitación, etc. (opcional)" {...register("Apartamento/habitación", {required: false})} />
          </label>
        </div>
        <div>
          <label>
            <p>Localidad/Ciudad</p>
            <input type="text" placeholder="Localidad/Ciudad" {...register("Localidad/Ciudad", {required: true})} />
            {errors.Nombre?.type === 'required' && <p className='required'>Campo requerido</p>}
          </label>
          <label>
          <p>Provincia</p>
            <input type="text" placeholder="Provincia" {...register("Provincia", {required: true})} /> 
            {errors.Nombre?.type === 'required' && <p className='required'>Campo requerido</p>}
          </label>
          <label>
            <p>Código Postal </p>
            <input type="number" placeholder="Código Postal" {...register("Código Postal", {required: true, min: 1, maxLength: 10})} />
            {errors.Nombre?.type === 'required' && <p className='required'>Campo requerido</p>}
          </label>
          <label>
            <p>Teléfono</p>
            <input type="number" placeholder="Teléfono" {...register("Teléfono", {required: true, min: 1, maxLength: 20})} />
            {errors.Nombre?.type === 'required' && <p className='required'>Campo requerido</p>}
          </label>
          <label className='button'>
            <button type="submit">REALIZAR PEDIDO</button>
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