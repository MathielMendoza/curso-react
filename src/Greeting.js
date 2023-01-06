//los props son parametros que se pasan a la funcion
export function Greeting({title, name = 'User'}) { // <=== desestructuración del objeto props y asignacion de valor por default
    return <h1>{title} - {name}</h1>
}

export function UserCard({name, amount, address, married, points}) {
    return (
        <div>
            <h1>Name: {name}</h1>
            <p>Amount: {amount}</p>
            <p>Married: {married ? 'married' : 'single'}</p>
            <ul>
                <li>City: {address.city}</li>
                <li>Address: {address.street}</li>
            </ul>
        </div>
    )
}
