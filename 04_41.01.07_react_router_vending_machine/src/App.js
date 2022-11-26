import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Chips from './Chips';
import Soda from './Soda';
import Sardines from './Sardines';
import NavBar from './NavBar';

import './App.css';

function App() {
	return (
	<React.Fragment>
		<BrowserRouter>
			<NavBar />
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/chips">
				<Chips />
			</Route>
			<Route exact path="/soda">
				<Soda />
			</Route>
			<Route exact path="/sardines">
				<Sardines />
			</Route>
		</BrowserRouter>
	</React.Fragment>
  	);
}

export default App;
