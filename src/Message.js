import React, {useState, useEffect} from "react";

export const Message = () => {
    const [message, setMessage] = useState('');

    const handleChange = (e) => setMessage(e.target.value);

    const handleClick = () => alert('Hello: ' + message);

    useEffect(() => {
        alert('Disparado desde useEffect: ' + message);
    }, [message]);

    //Todo: sin []     => Se ejecutara cuando se genere un cambio en el componente(global)
    //Todo: []         => Solo se ejecutara 1 vez
    //Todo: [dependencia] => Cuando se genere un cambio en la variable


    return (
        <div>
            <input onChange={handleChange}/>
            <button onClick={handleClick}>Save</button>
        </div>
    )

}
