import LiNavBar from '../LiNavBar/LiNavBar'
import Cart from '../CartWidget/Cart'
import './NavBar.css';

export default function NavBar(){
    
    return(
        <nav className="navBar navbar navbar-expand-lg w-90 m-auto nav-home">  
            <div className="container-fluid h-100">
                <button className="navbar-toggler border border-0 w-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navList" aria-controls="navList" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="logo">
                    <img className="imgLogo" src="/img/coder-icon.png" alt="logo coder ceramicas"/><p>Coder-Ceramicas</p>
                </div>
                <div className="navMenu">        
                        <div className="navList collapse navbar-collapse" id="navList">
                            <ul className="navbar-nav">
                                <LiNavBar id="link" texto="INICIO" path="/"/>
                                <LiNavBar id="link" texto="PRODUCTOS" path="/productos"/>
                                <LiNavBar id="link" texto="CLUB" path=""/>
                                <LiNavBar id="link" texto="CONTACTO" path=""/>
                            </ul>
                        </div>
                        
                    <div className="cartWidgetContainer">
                        <Cart/>
                    </div>
                </div>
            </div>
        </nav>   
    )
       
}