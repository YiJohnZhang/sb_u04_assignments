import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Chips(){

	const [clickCount, setClickCount] = useState(0);

	function incrementCrunch(evt){

		setClickCount(clickCount + 1);

	}

	return (

		<div>
			<p>Crunch!</p>
			<button onClick={incrementCrunch}>NOM NOM NOM</button>
			<Link to="/">Go Back</Link>
		</div>
	
	);

}

export default Chips;