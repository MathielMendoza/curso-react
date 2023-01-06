import React from "react";
import ReactDOM from 'react-dom/client';

import {Greeting, UserCard} from './Greeting'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Greeting title='Hola Mundo' name='Gerbo'/>
        <Greeting title='Hola Mundo'/>

        <UserCard name='Gerbo'
                  amount={3000}
                  married={true}
                  points={[99, 33.3, 22.2]}
                  address={{
                      street: '123 Main Street',
                      city: 'Teolo York'
                  }}
        />
        <UserCard name='Jahfo'
                  amount={5000}
                  married={true}
                  points={[100, 70.2, 40.5]}
                  address={{
                      street: '123 Main Street',
                      city: 'Teolo York'
                  }}
        />
    </>
)
