import React from 'react';
import { useState, useContext } from 'react';
import './itemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';

export default function ItemDetail( {item}) {

   const {handleAgregar} = useContext(CartContext);

  return (
    <div className ="itemDetail">
        <span className='img-detail'>
          <img src={item.image} alt={item.title}/>
        </span>
        <span className='txt-detail'>
          <h4 className='detail-title'>{item.title}</h4>
          <p className='detail-price'>$ {item.price}</p>
          <p className='detail-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequuntur facilis accusamus ducimus sapiente maiores molestiae fugit atque quos porro, 
            placeat id eum ex itaque accusantium explicabo velit impedit illum aut!
          </p>
          < ItemCount 
             handleAgregar={handleAgregar}
             item={item}
          />   
        </span>
       
        
    </div>
  )
}
