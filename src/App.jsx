
import './App.css'
import NavBar from './Components/Navbar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Components/Landing/Landing'

function App() {
  
  return (
    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
 