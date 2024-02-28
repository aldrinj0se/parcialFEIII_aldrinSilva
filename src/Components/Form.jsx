const formStyle = {
	flexDirection: 'column',
	display: 'flex',
	alignItems: 'center',
	alignItems: 'stretch',
	backgroundColor: '#e6e6e6',
	padding: '50px',
	width: '30vw',
};

const inputStyle = {
	color: 'black',
	backgroundColor: 'white',
	padding: '10px',
	// width: '300px',
	borderRadius: '5px',
};

const btnEnviarStyle = {
	backgroundColor: 'white',
	padding: '10px',
	// width: '300px',
	borderRadius: '5px',
};

const Form = ({ usuario, setUsuario, setShow, setErr }) => {
	const { nombre, color } = usuario;

	const handleSubmit = e => {
		e.preventDefault();
		let form = document.getElementById('form1');
		if (usuario.nombre.trimStart().length >= 3 && usuario.color.length >= 6) {
			setShow(true);
			setErr(false);
			form.reset();
			setTimeout(() => {
				setShow(false);
			}, 3000);
		} else {
			setErr(true);
		}
	};
	return (
		<div>
			<h1>Elige un color</h1>
			<form id='form1' style={formStyle} onSubmit={handleSubmit}>
				<input
					style={inputStyle}
					type='text'
					placeholder='Ingrese su nombre'
					onChange={({ target }) =>
						setUsuario({ ...usuario, nombre: target.value })
					}
				/>

				<br />
				<input
					style={inputStyle}
					type='text'
					placeholder='Ingresa tu color favorito (formato HEX)'
					onChange={({ target }) =>
						setUsuario({ ...usuario, color: target.value })
					}
				/>

				<br />
				<button>Enviar</button>
			</form>
		</div>
	);
};

export default Form;
