import './App.css';
// BS
import 'bootstrap/dist/css/bootstrap.min.css';

// Components:
import Header from './components/header/Header';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';


function App() {
  return (
        <>
        <Header />
        <ItemListContainer id="offers" />
        </>
        

  );
}

export default App;
