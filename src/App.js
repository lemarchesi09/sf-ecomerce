
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import {Route, Routes} from 'react-router-dom';
import Item from "./components/Item";
import Detalles from "./components/Detalles";
import Category from "./components/Category";


function App() {
  const nombre = "Mercado Mimbre"
  return (
    <div className="App">

        <header className="App-header">
        <NavBar nameEcomerce = {nombre} />
        <Routes>
          <Route path="/" element={<ItemListContainer nameEcomerce = {nombre}/>} />
          <Route path="/detalles/:id" element={<Detalles />}/>
          <Route path="/category/:category" element={<ItemListContainer nameEcomerce = {nombre}/>} />
          <Route path="*" element={<ItemListContainer nameEcomerce = {nombre}/>} />
        </Routes>
          
        </header>
  
    </div>
  );
}

export default App;
