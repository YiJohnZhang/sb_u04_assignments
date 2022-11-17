import React, { useState } from 'react';
import './MagicEightball.css'

// Helper Array; should be its own module but the project is small enough that it doesn't justify it.
const answers = [
	{ msg: "It is certain.", color: "green" },
	{ msg: "It is decidedly so.", color: "green" },
	{ msg: "Without a doubt.", color: "green" },
	{ msg: "Yes - definitely.", color: "green" },
	{ msg: "You may rely on it.", color: "green" },
	{ msg: "As I see it, yes.", color: "green" },
	{ msg: "Most likely.", color: "green" },
	{ msg: "Outlook good.", color: "green" },
	{ msg: "Yes.", color: "green" },
	{ msg: "Signs point to yes.", color: "goldenrod" },
	{ msg: "Reply hazy, try again.", color: "goldenrod" },
	{ msg: "Ask again later.", color: "goldenrod" },
	{ msg: "Better not tell you now.", color: "goldenrod" },
	{ msg: "Cannot predict now.", color: "goldenrod" },
	{ msg: "Concentrate and ask again.", color: "goldenrod" },
	{ msg: "Don't count on it.", color: "red" },
	{ msg: "My reply is no.", color: "red" },
	{ msg: "My sources say no.", color: "red" },
	{ msg: "Outlook not so good.", color: "red" },
	{ msg: "Very doubtful.", color: "red" },
];

// Helper function; should be its own module but the project is small enough that it doesn't justify it.
const randomAnswerPicker = (answerArray) => {

	const randomIndex = Math.floor(Math.random()*answerArray.length) + 1;

	return answerArray[randomIndex];

}


const MagicEightball = () => {

	//	Magic 8 Ball
	const default8BallState = {msg: 'Think of a question.', color: 'black'};
	const [ballStatus, setBallStatus] = useState(default8BallState);

	let eightballStyle = {
		backgroundColor: ballStatus.color,
	}


	//	Magic 8 Ball Results Counter
	let resultsCounter = {'green': 0, 'goldenrod': 0, 'red':0};
	const [resultStatus, setResultStatus] = useState({'green': 0, 'goldenrod': 0, 'red':0});

	const updateBallHandler = () => {

		if(ballStatus.color === 'black'){

			const newBallStatus = randomAnswerPicker(answers);
			setBallStatus(newBallStatus);

			// resultsCounter[newBallStatus.color] += 1;
			// setResultStatus(resultsCounter);
			resultStatus[newBallStatus.color] += 1;
			setResultStatus(resultStatus);

		}

	}

	const resetBallHandler = () => {
		
		if(ballStatus.color !== 'black')
			setBallStatus(default8BallState);

	}

	return (
		<div>
			<div style={eightballStyle} id="MagicEightball-Ball" onClick={updateBallHandler}>
				<p>{ballStatus.msg}</p>
			</div>
			<p></p>
			<button onClick={resetBallHandler}>Reset</button>
			<ul>
				<li><strong>Green</strong>: {resultStatus.green}</li>
				<li><strong>Golden Rod</strong>: {resultStatus.goldenrod}</li>
				<li><strong>Red</strong>: {resultStatus.red}</li>
			</ul>
		</div>
	);

}

export default MagicEightball;