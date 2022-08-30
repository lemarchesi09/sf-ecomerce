
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {
  const nombre = "Mercado Mimbre"
  return (
    <div className="App">
      <header className="App-header">
      <NavBar nameEcomerce = {nombre} />
      <ItemListContainer nameEcomerce = {nombre}/>
      </header>
    </div>
  );
}

export default App;
