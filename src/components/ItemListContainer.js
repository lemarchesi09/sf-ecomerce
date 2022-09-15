import { useState, useEffect, Fragment, } from "react"
import {Button, Card} from 'react-bootstrap';
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import axios from 'axios';

const ItemListContainer = ({nameEcomerce}) =>{

    const [products, setProducts] = useState([])
    const {category} = useParams();
    console.log('params', category);
    // Api Request con Axios
    const getProductsAxios = async () =>{
        const getAxios = await axios.get('https://fakestoreapi.com/products')
        console.log('getAxios', getAxios);
    // Filtrar por categoria o devolver el array completo
    if(category){
        setProducts(getAxios.data.filter((product) => product.category === category))
    }else{
        setProducts(getAxios.data)
    }
    // Try Catch
    // try{
    //     const response = await fetch('https://fakestoreapi.com/products')
    //     console.log(response);
    //     const data = await response.json()
    //     console.log(data);
    //     setProducts(data)

    // }catch (error){
    //     console.log(error);
    // }

    }



    // useEffect
    // Se ejecuta cuando aparece por primera vez en el DOM y cuando se actualiza el componente
    // La primer parte responde al callback que quiero usar.
    // La segunda parte se denomina Array de Dependencias del useEffect []
    useEffect(() =>{
        getProductsAxios()
    }, [category])
    return(
        
        <div className="item-list-cont">
            <h1>Bienvenidos a {nameEcomerce}</h1>
            <ItemList products={products}/>
 
        </div>
    )
}

export default ItemListContainer