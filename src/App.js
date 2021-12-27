import './App.css'
// BS
import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import Header from './components/header/Header'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShoppingCart from './shoppingcart/ShoppingCart'


function App() {
  return (
        // Encierro en el enrutador y los componentes internos pasan como children
        <BrowserRouter> 
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<ItemListContainer id="offers"/>} />
              <Route path="/products" element={<ItemListContainer id="offers"/>} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
            </Routes>
          </main>
        </BrowserRouter>
  );
}

export default App
