import ItemListContainer from "./ItemListContainer"


const Category = () =>{

// Call API for cloth
const getCategory = async () =>{
    const response = await fetch("https://fakestoreapi.com/products/category/women's clothing")
   console.log('Primer response', response);
   const data = await(response.json())
   console.log(data);
}
getCategory()
    return(
        <div>
            <h2>Categorias</h2>
        </div>
    )
}

export default Category