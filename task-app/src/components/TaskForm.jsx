import React, {useState} from 'react';

const TaskForm = ({createTask}) => {
	const [title, setTitle] = useState('');

	const handleChange = (e) => setTitle(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		createTask(title);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input placeholder='Escribe tu tarea'
			       onChange={handleChange}
			/>
			<button>Guardar</button>
		</form>
	);
}

export default TaskForm;
