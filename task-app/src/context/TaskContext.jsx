import {createContext, useEffect, useState} from "react";
import {tasks as data} from "../data/tasks";


const TaskContext = createContext();

const TaskContextProvider = (props) => {
	const [tasks, setTasks] = useState([]);
	const createTask = ({title, description}) => {
		setTasks([...tasks, {
			id: tasks.length,
			title,
			description,
			day: Date.now(),
		}])
	};

	const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

	useEffect(() => {
		setTasks(data);
	}, []);


	return (
		<TaskContext.Provider value={{
			tasks,
			createTask,
			deleteTask
		}}>
			{props.children}
		</TaskContext.Provider>
	);
}

export {TaskContext, TaskContextProvider};
