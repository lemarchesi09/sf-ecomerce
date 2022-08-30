import { useState } from "react"
import {Button} from 'react-bootstrap';

const ItemCount = ({stock, initial}) =>{

    const [count, setCount] = useState(initial)

    const increase = () => {
        console.log("Adding a Tuki");
        if (count<stock) {
            setCount(count + 1);
        }
        
    };

    const decrease = () => {
        console.log("Deccounting a Tuki");
        if (count>initial) {
            setCount(count - 1);
            
        }
    }
    return(
        <div>
            <h2>Esto es ItemCount</h2>

            <h2> Contador</h2>
            <p>Items : <span>{count}</span> </p>

            <div className="botones">
                <Button variant="dark" onClick={decrease}>-</Button>
                <Button variant="dark" onClick={increase}>+</Button>
                
                <Button variant="dark">Add to Cart</Button>
            </div>
        </div>
    )
}

export default ItemCount