import React, {useState} from "react";

export const Message = () => {
    const [message, setMessage] = useState('');

    const handleChange = (e) => setMessage(e.target.value);

    const handleClick = () => alert('Hello: ' + message);


    return (
        <div>
            <input onChange={handleChange}/>
            <button onClick={handleClick}>Save</button>
        </div>
    )

}
