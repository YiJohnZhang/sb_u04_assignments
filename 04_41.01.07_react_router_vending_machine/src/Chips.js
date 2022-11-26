import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Chips(){

	const [clickCount, setClickCount] = useState(0);

	function incrementCrunch(evt){

		setClickCount(clickCount + 1);

	}

	return (

		<div class="page-container">
			<p>Crunch!</p>
			<button onClick={incrementCrunch}>{"NOM".repeat(clickCount + 1)}</button>
			<p><Link to="/">Go Back</Link></p>
		</div>
	
	);

}

export default Chips;