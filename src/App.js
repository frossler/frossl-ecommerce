import './App.css'
// BS
import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShoppingCart from './shoppingcart/ShoppingCart'
import { Toaster } from 'react-hot-toast';

const linksECommerce = [
  
  {href:"/products", name:"Catalogue", id: 1},
  {href: "/category/electronics", name: "Electronics", id: 2},
  {href: "/category/jewelery", name: "Jewelery", id: 3},
  {href: "/category/men's clothing", name: "Men's clothing", id: 4}
];
const user = "Visitor";
const greeting = "Check out all the offers!";


function App() {
  return (
        // Router
        <BrowserRouter> 
            <main>
            <NavBar nombre={user} links={linksECommerce} />
                <Routes>
                    <Route path="/" element={<ItemListContainer user={user} greeting={greeting}/>} />
                    <Route path="/products" element={<ItemListContainer user={user} greeting={greeting} />} />
                    <Route path="/cart" element={<ShoppingCart />} />
                    <Route path="/category/:id" element={<ItemListContainer user={user} greeting={greeting} />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                </Routes>
            </main>
            <Toaster position="top-right" toastOptions={{duration: 3000}} />
        </BrowserRouter>
  );
}

export default App
