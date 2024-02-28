import { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Form from './Components/Form';

function App() {
	const [usuario, setUsuario] = useState({
		nombre: '',
		color: '',
	});

	const [show, setShow] = useState(false);
	const [err, setErr] = useState(false);

	return (
		<div className='App'>
			<Form
				usuario={usuario}
				setUsuario={setUsuario}
				setShow={setShow}
				setErr={setErr}
			/>
			<br />

			{show ? <Card usuario={usuario} /> : null}

			{err && (
				<h4 style={{ color: 'red' }}>
					Por favor chequea que la información sea correcta
				</h4>
			)}
		</div>
	);
}

export default App;
