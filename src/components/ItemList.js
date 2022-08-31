import {Button, Card} from 'react-bootstrap';
import Item from "./Item"

const ItemList = ({products}) =>{

    return(
        
        <div className="item-grid">
            
        {products.map((product) =>{
            return(
                <Item product={product}  />
            )
        })}

    </div>
    )
}

export default ItemList