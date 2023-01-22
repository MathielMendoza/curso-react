import {useEffect, useState} from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import {tasks as data} from "./data/tasks.js";

const App = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		setTasks(data);
	}, []);

	const createTask = (taskTitle) => {
		setTasks([...tasks, {
			title: taskTitle,
			id: tasks.length,
			day: Date.now(),
		}])
	};

	return (
		<>
			<h1>Task App</h1>
			<TaskForm createTask={createTask}/>
			<TaskList tasks={tasks}/>
		</>
	);
}

export default App;
