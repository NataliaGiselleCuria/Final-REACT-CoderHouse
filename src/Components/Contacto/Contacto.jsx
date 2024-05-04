import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Contacto = () => {

    const { register, handleSubmit} = useForm();

    const enviar = (data) =>{
        console.log(data)
    }

  return (
    <div className='contacto'>
      <h4>CONTACTO</h4>
      <div className='contactoContainer'>
        <form className='formulario' onSubmit={handleSubmit(enviar)}>
            <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")}/>
            <input type="email" placeholder='Ingresa tu email' {...register("email")}/>
            <textarea type="text" placeholder='Ingresa tu mensaje' {...register("mensaje")}/>
            <button type="submit"> Enviar </button>
        </form>
      </div>
    </div>
  )
}

export default Contacto
