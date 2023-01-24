import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

const App = () => {
	return (
		<main className='bg-zinc-900 h-screen py-4'>
			<div className='container mx-auto'>
				<TaskForm/>
				<TaskList/>
			</div>
		</main>
	);
}

export default App;
