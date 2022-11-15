import React from 'react';
import ReactDOM from 'react-dom';
import fruits from './foods';
import { choice, remove } from './helpers';

const App = () => {

	const fruitChosen = choice(fruits);

	return(
		<React.Fragment>
			<p>I'd like one {fruitChosen} </p>
			<p>Here you go: {remove(fruits, fruitChosen).item}</p>
			<p>Delicious! May I have another?</p>
			<p>I'm sorry, we're all out. We have {fruits.length} left.</p>
		</React.Fragment>
	);

}

ReactDOM.render(<App />, document.getElementById('root'));