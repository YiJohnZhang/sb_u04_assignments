import React, {useState, useEffect} from 'react';

function Cards(){

	const [getNextCard, setGetNextCard] = useState(0);
	const [autoDraw, setAutoDraw] = useState(false);
	const [getNewDeckFlag, setGetNewDeckFlag] = useState(false);

	// load API
	useEffect(() => {

	}, [getNewDeckFlag])

	
	function drawNextCard(){



	}

	function toggleAutoDraw(){

	}

	function getNewDeck(){

		setGetNewDeckFlag((currentFlag) => !currentFlag);

	}

	return(
	<>
		<form>
			<button onClick={drawNextCard}>Draw a Card</button>
			<button onClick={toggleAutoDraw}>Toggle Auto-Draw</button>
			<button onClick={getNewDeck}>Get a New Deck</button>
		</form>
		<div id="card-container">

		</div>
	</>
	);

}

export default Cards;