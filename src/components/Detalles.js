import { useEffect, useState } from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link, useLocation} from 'react-router-dom'

const Detalles = () =>{

    const [item, setItem] = useState({})
    // Traer prop usando Link y useLocation
    const location = useLocation()
    const productId = location.state
    console.log('Product Id:', productId);

    //Pedido Fetch a la API para solicitar un producto
    const getProduct = () =>{
        fetch(`https://fakestoreapi.com/products/${productId}`)
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
                <p>Lorem asdasbd ndkanskak sdsaj kd jaskdjask djajsda sndjasn jdanskdjansn naksjdnaksjndkj asjdnksand sadjasn</p>
            </div>
       </div>
    )
}

export default Detalles