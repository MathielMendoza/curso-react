export const Posts = () => {
	return <button onClick={() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(json => console.log(json))
			.catch(error => console.error(error))
	}}>
		Traer posts
	</button>
}
