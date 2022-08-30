import { useState } from "react"
import "../css/contador.css"

const Contador = () => {
    const [count, setCount] = useState(0)
    const [info, setInfo] = useState(
        {
            name:"Enano",
            age: 29
        }  
    )

    const [loading, setLoading] = useState(false)
    const stringLoading = loading.toString()

    const [animals, setAnimals] = useState(["Raccoon"])

    const zoo = ["Dog", "Monkey", "Owl", "Kangaroo", "Panda"]

    const loadingChanger = () =>{
        setLoading(!loading)
        console.log(loading);
    }
    const increase = () => {
        console.log("Adding a Tuki");
        setCount(count + 1);
    };

    const decrease = () => {
        console.log("Deccounting a Tuki");
        setCount(count - 1);
    }


    console.log(info);
    const infoChanger = () =>{
        setInfo({...info, name: "Enzo", lastName: "Marchesi"})
        console.log(info);
    }

    const animalsHandler = () =>{
        setAnimals([...animals.concat(zoo)])
        
        
    }
    console.log(animals);
    return(
        <div className="contenedor">
            <h1>Tasks</h1>
            <h2> Tuki´s Counter</h2>
            <p>Tuki´s : <span>{count}</span> </p>

            <div className="botones">
                <button onClick={decrease}> Remove a Tuki =(</button>
                <button onClick={increase}> Add a Tuki =)</button>

            </div>

            <h2>Info</h2>
            <h3>Name: <span>{info.name}</span></h3>
            <h3>Age: <span>{info.age}</span></h3>
            <button onClick={infoChanger}> Change Info</button>

            <h2>Loader</h2>
            <p>{stringLoading}</p>
            <button onClick={loadingChanger}> Change Loading</button>

            <h2>Animals</h2>
            <button onClick={animalsHandler} > Add Animals</button>
            <ul>
                {animals.map(animal =>{
                    return <li><p>{animal}</p></li>
                })}
            </ul>
        </div>
    );
}

export default Contador