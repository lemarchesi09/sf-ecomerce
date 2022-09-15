import { useEffect, useState } from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link, useLocation, useParams} from 'react-router-dom'
import ItemCount from './ItemCount'

const Detalles = () =>{

    const [item, setItem] = useState({})
    // Traer prop usando Link y useLocation
    // const location = useLocation()
    // const productId = location.state
    // console.log('Product Id:', productId);

    
    // Traer prop usando useParams()
    const { id } = useParams()
    console.log('use params', id);

    //Pedido Fetch a la API para solicitar un producto
    const getProduct = () =>{
        fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res=>res.json())
                .then(data => setItem(data))

    }
    console.log(item);
    useEffect(()=>{
        getProduct()
    },[])
    return(
       <div className='detalle-cont'>
        <div className='det-img-cont'>
            <img className='imagen-prod' src={item.image} />
        
        </div>
            <div className='detalle-texto'>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Description: {item.description}</p>
                <ItemCount/>
                <Button variant="dark">Add to Cart</Button>

            </div>
       </div>
    )
}

export default Detalles