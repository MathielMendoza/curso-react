import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

const App = () => {
	return (
		<main className='bg-zinc-900 h-screen h-full py-3'>
			<div className='container mx-auto'>
				<h1>Task App</h1>
				<TaskForm/>
				<TaskList/>
			</div>
		</main>
	);
}

export default App;
