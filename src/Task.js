import './tasks.css'

export function TaskCard({ready}) {
	//opcion desde el componente
	const cardStyles = {
		backgroundColor: '#202020',
		color: '#fff',
		padding: '20px',
	}

	const titleStyles = {
		fontWeight: 'lighter',
	}

	return (
		//<div style={cardStyles}>
		<div className='card'>
			{/*<h1 style={titleStyles}>Mi primer tarea</h1>*/}
			<h1 className='title'>Mi primer tarea</h1>
			{/*<span style={ready ? {background: 'green'} : {background: 'red'}}>*/}
			<span className={ready ? 'bg-green': 'bg-red'}>
				{ready
					? '✅ Tarea realizada'
					: '❌ Tarea pendiente'
				}
			</span>
		</div>
	)
}


