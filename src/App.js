import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import Logo from './components/Logo/Logo';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Logo />
				<h1>React Weather App</h1>
			</header>
			<main>
				<Forecast />
			</main>
			<footer>
				<p>Created by Judith Rohatiner for Palmetto
					<p className="below"> If you like it hire me  </p>
				</p>
			</footer>
		</div>
	);
}

export default App;
