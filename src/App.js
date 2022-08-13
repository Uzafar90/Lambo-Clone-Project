import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Design from './Components/Design';
import Model from './Components/Model';
import Footer from './Components/Footer';

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Design />
			<Model />
			<Footer />
		</>
	);
};

export default App;
