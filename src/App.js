
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import {Route, Routes} from 'react-router-dom';
import Item from "./components/Item";
import Detalles from "./components/Detalles";

function App() {
  const nombre = "Mercado Mimbre"
  return (
    <div className="App">

        <header className="App-header">
        <NavBar nameEcomerce = {nombre} />
        <Routes>
          <Route path="/" element={<ItemListContainer nameEcomerce = {nombre}/>} />
          <Route path="/detalles/:id" element={<Detalles />}/>
        </Routes>
          
        </header>
  
    </div>
  );
}

export default App;
