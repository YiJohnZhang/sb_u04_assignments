import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (

	<div>
		<div>
			<p>This is a vending machine.</p>
			<p>Select your snack.</p>
		</div>
		<div>
			<ul>
				<li><Link to="/chips">Chips</Link></li>
				<li><Link to="/soda">Soda</Link></li>
				<li><Link to="/sardines">Sardines</Link></li>
			</ul>
		</div>
	</div>

);

export default Home;