import React from "react";
import ReactDOM from 'react-dom/client';

import {Greeting, UserCard} from './Greeting'
import {Button} from "./Button";
import {TaskCard} from './Task'
import {Saludar} from "./Saludar";
import {Posts} from './Posts'

const root = ReactDOM.createRoot(document.getElementById('root'));
const handleChange = (e) => {
	console.log(e.target.value)
}
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
		<TaskCard ready={false}/>
		<h1>📝Componentes basados en clases</h1>
		<Saludar/>
		<h1>📝Event Handlers</h1>
		<input onChange={handleChange}/>
		<form onSubmit={(e) => {
			e.preventDefault();
			console.log('Formulario enviado');
		}}>
			<h1>Registro de usuario</h1>
			<button>Send</button>
		</form>
		<h1>📝Fetch API</h1>
		<Posts/>

	</>
)
