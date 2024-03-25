import React from 'react'
import Item from '../Item/Item'

export default function ItemList ({ productos }) {
    
    return (
        <div className='itemList'>
            
            { productos.map((producto) => <Item producto ={producto} key={producto.id} /> )}
            
        </div >
    )
};


