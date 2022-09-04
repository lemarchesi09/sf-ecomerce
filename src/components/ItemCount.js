import { useState } from "react"
import {Button} from 'react-bootstrap';

const ItemCount = () =>{

    let stock = 15;
    let initial = 1
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
            <p>Items : <span>{count}</span> </p>
            <div className="botones">
                <Button variant="dark" onClick={decrease}>-</Button>
                <Button variant="dark" onClick={increase}>+</Button>
                
                
            </div>
        </div>
    )
}

export default ItemCount