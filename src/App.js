import './App.css';
// BS
import 'bootstrap/dist/css/bootstrap.min.css';
// Products Array -temp-
import {Products} from './misc/stock.js';
// Components
import Header from './components/header/Header';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';


function App() {
  return (
        <>
        <Header />
        <ItemListContainer id="offers" products={Products} />
        </>
        

  );
}

export default App;
