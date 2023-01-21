import React, {useState} from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const handleClickLess = () => setCounter(counter - 1)
    const handleClickAdd = () => setCounter(counter + 1)
    const handleClickReset = () => setCounter(0)

    return (<div>
        <h1>Counter: {counter}</h1>
        <button onClick={handleClickLess}>Restar</button>
        <button onClick={handleClickAdd}>Sumar</button>
        <button onClick={handleClickReset}>Reiniciar</button>
    </div>)
}

