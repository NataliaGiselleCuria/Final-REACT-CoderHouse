
import { useContext, useState, React } from 'react';
import { CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc} from "firebase/firestore";
import { db} from '../../firebase/config';

const ChekOut = () => {

  const [pedidoId, setPedidoId] = useState("")

  const { carrito, precioTotal, handleVaciar} = useContext(CartContext);

  const { register, handleSubmit} = useForm();

  const comprar = (data) =>{
      const pedido ={
        cliente: data,
        productos: carrito,
        total:precioTotal()
      }
      console.log(pedido)

      const pedidoRef = collection(db, "pedidos");
      addDoc(pedidoRef, pedido)
       .then((doc) => {
         setPedidoId(doc.id)
         handleVaciar();
       })
    }
  
    if(pedidoId){
      return (
        <div className='checkOutContainer'>
          <h4>Gracias por tu compra</h4>
          <p>Tu numero de pedido es {pedidoId}</p>
        </div>
      )
    }

  return (
    <>
      <h4>CHECK OUT</h4>
      <div className='checkOutContainer'>
        <p>Ingrese sus datos para terminar la compra </p>
        <form className='formulario' onSubmit={handleSubmit(comprar)}>
            <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")}/>
            <input type="email" placeholder='Ingresa tu email' {...register("email")}/>
            <button type="submit"> Comprar </button>
        </form>
      </div>
    </>
  )
}

export default ChekOut
