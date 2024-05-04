import React, { useState } from 'react'
import './itemCount.css'

const ItemCount = ({handleAgregar, item}) => {


  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
      cantidad > 1 && setCantidad(cantidad -1)
  }

  const handleSumar = () => {
      setCantidad (cantidad + 1)
  }
   
  return (
   <div className="item-count-contain">

        <div className="item-count">
            <button className="count" onClick={handleRestar}> - </button>
            <p>{cantidad}</p>
            <button className="count" onClick={handleSumar} > + </button>
        </div>
        <button className="agregar-carrito" onClick={() => {handleAgregar(item, cantidad)}}>Agregar al carrito</button>
   </div>
        
  )
}

export default ItemCount