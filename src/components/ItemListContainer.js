import { useState, useEffect } from "react"
import {Button, Card} from 'react-bootstrap';
import ItemCount from "./ItemCount"
import ItemDetails from "./ItemDetails";

const ItemListContainer = ({nameEcomerce}) =>{

    const [products, setProducts] = useState([])

    const [item, setItem] = ([])
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


    
    const getOneProduct = async (id) =>{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        console.log(response);
        const data = await response.json()
        console.log(data);
        setItem(data)

    }


    // useEffect
    // Se ejecuta cuando aparece por primera vez en el DOM y cuando se actualiza el componente
    // La primer parte responde al callback que quiero usar.
    // La segunda parte se denomina Array de Dependencias del useEffect []
    useEffect(() =>{
        getProducts()
    }, [])
    useEffect(() =>{
        getOneProduct()
    }, [])
    return(
        
        <div className="item-list-cont">
            <h1>Bienvenidos a {nameEcomerce}</h1>
            <h2>Esto es ItemListContainer</h2>
            <ItemCount stock={15} initial={1} />
            <h2>Productos</h2>
            <div className="item-grid">
                {products.map((product) =>{
                    return(
                        <Card className="item-card">
                            <Card.Img className="item-img" src={product.image} />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">{product.title}</Card.Title>
                                <Card.Text>${product.price}</Card.Text>
                                <Button onClick={()=> {getOneProduct(product.id)}}>Info </Button>
                            </Card.Body>
                        </Card>
                        
                    
                    )
                })}

            </div>
        </div>
    )
}

export default ItemListContainer