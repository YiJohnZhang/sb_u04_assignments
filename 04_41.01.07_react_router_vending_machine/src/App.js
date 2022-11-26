import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Home';
import Chips from './Chips';
import Soda from './Soda';
import Sardines from './Sardines';
import NavBar from './NavBar';

import './App.css';
// import { Router, Routes } from 'react-router';

function App() {
	return (
		//   <BrowserRouter forceRefresh={true}>
		<BrowserRouter>
			<NavBar />
			<Route exact path="/" render={() => <Home />} />
			<Route path="/chips" render={() => <Chips />} />
			<Route path="/soda" render={() => <Soda />} />
			<Route path="/sardines" render={() => <Sardines />} />
		</BrowserRouter>
  	);

		// after ~45 minutes of debugging, finally got it to work: the solution to use the following pkgs:
		// "react-router-dom": "^5.3.0",
		//	NO "react-router"
		//	See https://v5.reactrouter.com/web/example/sidebar, `package.json`

	//   <BrowserRouter forceRefresh={true}>
	// 	  <NavBar />
	// 	  <Route exact path="/">
	// 		  <Home />
	// 	  </Route>
	// 	  <Route exact path="/chips">
	// 		  <Chips />
	// 	  </Route>
	// 	  <Route exact path="/soda">
	// 		  <Soda />
	// 	  </Route>
	// 	  <Route exact path="/sardines">
	// 		  <Sardines />
	// 	  </Route>
	//   </BrowserRouter>
	// );

	// {/* <Routes>
	// 	<NavBar />
	// 	<Route path="/" element={<Home />}>
	// 		<Route index element={<Home />} />
	// 		<Route path="chips" element={<Chips />} />
	// 		<Route path="soda" element={<Soda />} />
	// 		<Route path="sardines" element={<Sardines />} />				
	// 	</Route>
	// </Routes> */}
}

export default App;