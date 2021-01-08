import React, { useState } from 'react';
import Modal from './Modal';
import './styles.css';

export default function App() {
	const [modal, setModal] = useState(false);
	return (
		<div className="App">
			<button onClick={() => setModal(!modal)} type="button">
				Modal öffnen
			</button>
			<Modal state={modal} setModal={setModal} />
		</div>
	);
}
