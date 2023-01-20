import PropTypes from "prop-types";

export function Button({text, name = 'Usuario'}) {
	return <button onClick={ function () {
		console.log(`Hola mundo`);
	}}>
		{text} - {name}
	</button>
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	name: PropTypes.string
}


/*
Otra forma para asignar valor por default

 Button.defaultProps = {
     name: 'Usuario'
 }
*/
