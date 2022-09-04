import {Button, Card} from 'react-bootstrap';
import Item from "./Item"

const ItemList = ({products}) =>{

    return(
        <div>
            <h2>Productos</h2>
            <div className="item-grid">
                
            {products.map((product) =>{
                return(
                    <Item product={product}  />
                )
            })}

        </div>
        </div>
    )
}

export default ItemList