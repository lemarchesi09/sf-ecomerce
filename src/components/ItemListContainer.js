import { useState, useEffect } from "react"
import ItemCount from "./ItemCount"

const ItemListContainer = ({nameEcomerce}) =>{

    const [products, setProducts] = useState([])
    // Api Request con async await
    const getProducts = async () =>{
    // Try Catch
    try{
        const response = await fetch('https://fakestoreapi.com/products')
        console.log(response);
        const data = await response.json()
        console.log(data);
        setProducts(data)

    }catch (error){
        console.log(error);
    }

    }   

    // useEffect
    // Se ejecuta cuando aparece por primera vez en el DOM y cuando se actualiza el componente
    // La primer parte responde al callback que quiero usar.
    // La segunda parte se denomina Array de Dependencias del useEffect []
    useEffect(() =>{
        getProducts()
    }, [])
    return(
        
        <div className="item-list-cont">
            <h1>Bienvenidos a {nameEcomerce}</h1>
            <h2>Esto es ItemListContainer</h2>
            <ItemCount stock={15} initial={1} />
            {products.map((product) =>{
                return(
                   <>
                    <div>{product.title}</div>
                    <img src={product.image} alt="imagen"></img>
                   
                   </>
                 
                )
            })}
        </div>
    )
}

export default ItemListContainer