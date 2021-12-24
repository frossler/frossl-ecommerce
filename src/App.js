import './App.css'
// BS
import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import Header from './components/header/Header'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
        // Encierro en el enrutador y los componentes internos pasan como children
        <BrowserRouter> 
          <Header />
          <ItemListContainer id="offers"/>
        </BrowserRouter>
  );
}

export default App
