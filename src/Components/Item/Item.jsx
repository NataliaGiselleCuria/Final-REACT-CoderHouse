import React from 'react'
import './item.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';



const Item = ({producto}) => {

  // const verDesc = document.querySelectorAll('.hide-desc');
  // verDesc.forEach(el => {
  //   el.addEventListener('click', function (){

  //   })
    
  // });

  return (
        <div className='card' key={producto.id}>

          <div className="add-cart"></div>
          <img src={producto.image} alt={producto.title}/>
          <div className='description'>
            <span className='hide-desc'>

               { <FontAwesomeIcon icon={faEye} /> }

            </span>
            <span className='show-desc'>

              <span>
              <Link className="ver-mas" to={`/item/${producto.id}`}> <p>{producto.title}</p> </Link>
                  <p>$ {producto.price}</p>
              </span>

            </span> 
          </div>
            
        </div>
  )
}

export default Item;


