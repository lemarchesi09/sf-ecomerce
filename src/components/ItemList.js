import {Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Item from "./Item"

const ItemList = ({products}) =>{

    return(
        <div>
            <h2>Productos</h2>
            <div className="item-grid">
                
            {products.map((product) =>{
                return(
                    
                    <Item key = {product.id} product={product}  />
                )
            })}

        </div>
        </div>
    )
}

export default ItemList