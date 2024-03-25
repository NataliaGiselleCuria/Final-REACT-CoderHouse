import cart from './assets/cart.png';

export default function Cart(){
    
    return(
        <>
         <img src={cart} alt="cart-widget" className="imgNavBar" /><div className="countCart">1</div>
        </>
    )
}