
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Landing from './Components/Landing/Landing';
import Contacto from './Components/Contacto/Contacto';
import Carrito from './Components/Carrito/Carrito';
import CheckOut from './Components/CheckOut/CheckOut';
import { CartProvider } from './context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  
  return (

    < CartProvider>
      <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/contacto" element={<Landing />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>

      </BrowserRouter>
    </CartProvider>
  )
}

export default App
 