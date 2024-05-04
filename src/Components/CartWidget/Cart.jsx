import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import cart from './assets/cart.png';

export default function Cart(){

    const { cantEnCarrito} = useContext(CartContext);
    
    return(
        <>
         <img src={cart} alt="cart-widget" className="imgNavBar" /><div className="countCart">{cantEnCarrito()}</div>
        </>
    )
}