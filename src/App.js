import React, { useState } from 'react';
import Status from './Component/Status/Status';
import Countries from './Component/Countries/Countries';
import Diagram from './Component/Diagram/Diagram';
import logo from "./assets/covid19.png"
import './App.css';
function App() {
	const [ExactCountry, setExactCountry] = useState('');

	return (
		<div className="container">
			<img style={{ borderRadius: "5px" }} height="150px" width="500px" src={logo} alt="Logo" />
			<Status country={ExactCountry} />
			<Countries setExactCountry={setExactCountry} />
			<Diagram country={ExactCountry} />
		</div>
	);
}

export default App;
