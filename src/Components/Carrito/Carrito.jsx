import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import './carrito.css'

export default function Carrito() {

    const { carrito, cantEnCarrito, precioTotal, handleVaciar} = useContext(CartContext);

  return (
    <div className='carritoContainer'>
        <div className='cont'>
            <div className='productos-carrito'>
                <h5>PRODUCTOS</h5>
                <div className='prod-carrito'>
                {
                    carrito.length == 0 ?
                    <>
                        <p>El carrito está vacio.</p>
                    </> :
                    <>
                    {carrito.map((prod) => (
                        <div key={prod.id} className='prod'>
                            <img src={prod.image} alt={prod.title}/>
                            <span className='prod-info'>
                                <span>
                                    <h6>{prod.title}</h6>
                                    <p>${prod.price}</p>
                                </span>
                                <span className='span-total'>
                                    <p>Cantidad: {prod.cantidad}</p>
                                    <p className='total'>Total: ${prod.price * prod.cantidad}</p>
                                </span>
                            </span>  
                        </div>
                    ))}
                    <button onClick={handleVaciar}>Vaciar</button>
                    </>   
                }
                </div>   
            </div>
            <div className='resumen-carrito'>
                <h5>RESUMEN</h5> 
                <div>
                    <span> {carrito.length == 0 ? (<span><p>No hay productos agregados.</p><p><Link to="/productos">Agregar productos</Link></p></span>) : (<p>Productos ({cantEnCarrito()})</p>)}<p>${precioTotal()}</p></span>
                    <span><p>Envio</p><p className='envio'>Gratis</p></span>
                    <span className='resumen-total'><p>TOTAL: </p><p>${precioTotal()}</p></span>
                    <button className='comprar'><Link to="/checkout">FINALIZAR COMPRA</Link></button>
                </div>              
                
            </div>
        </div>   
    </div>
  )
}
