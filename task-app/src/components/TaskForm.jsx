import React, {useState, useContext} from 'react';
import {TaskContext} from "../context/TaskContext";

const TaskForm = () => {
	const {createTask} = useContext(TaskContext);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleChangeTitle = (e) => setTitle(e.target.value);
	const handleChangeDescription = (e) => setDescription(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		createTask({title, description});
		setTitle('');
		setDescription('');
	};

	return (
		<div className='max-w-md mx-auto'>
			<form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
				<h1 className='text-2xl font-bold text-white'>Create Task</h1>
				<input placeholder='Escribe tu tarea'
				       onChange={handleChangeTitle}
				       value={title}
				       className='bg-slate-300 p-3  w-full mb-2'
				       autoFocus
				/>
				<textarea placeholder='Escribe una descripción'
				          onChange={handleChangeDescription}
				          value={description}
				          className='bg-slate-300 p-3  w-full mb-2'
				></textarea>
				<button className='bg-indigo-500 px-3 py-1 text-white'>Guardar</button>
			</form>
		</div>
	);
}

export default TaskForm;
