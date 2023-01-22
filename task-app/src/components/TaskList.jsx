import TaskCard from "./TaskCard.jsx";

const TaskList = ({tasks}) => {

	if (tasks.length === 0) return <p>No tasks</p>;

	return (
		<div>
			{tasks.map((task) => (
				<TaskCard key={task.id} task={task}/>
			))}
		</div>
	);
}

export default TaskList;

