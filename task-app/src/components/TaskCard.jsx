import React from 'react';

const TaskCard = ({task}) => {
	return (
		<div>
			<h1>{task.title}</h1>
			<p>{task.day}</p>
		</div>
	);
};

export default TaskCard;
