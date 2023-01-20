import React from "react";
import ReactDOM from 'react-dom/client';

import {Greeting, UserCard} from './Greeting'
import {Button} from "./Button";
import {TaskCard} from './Task'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<h1>📝Props</h1>
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
		<h1>📝PropTypes y defaultProps</h1>
		<Button text='Click me'/>
		<Button text='Pay' name='Jahfo'/>
		<Button text='Hello world' name='Gerbo'/>
		<h1>📝Estilos</h1>
		<TaskCard ready={false}/>
	</>
)
