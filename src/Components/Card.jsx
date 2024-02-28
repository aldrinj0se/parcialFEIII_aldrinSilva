const boxColorStyle = {
	backgroundColor: '#3acf21',
	padding: '5px',
};

const cardStyle = {
	lineHeight: '3',
	fontWeight: '700',
	border: '2px solid black',
	padding: '30px',
};

const Card = ({ usuario }) => {
	const { nombre, color } = usuario;
	return (
		<div style={cardStyle}>
			Hola {usuario.nombre}! <br />
			Sabemos que tu color favorito es:
			<div style={boxColorStyle}>{usuario.color}</div>
		</div>
	);
};

export default Card;
