import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';

function Cards(){

	let deckIDRef = useRef(null);
	let timerIntervalID = useRef();
	const cardImageContainer = useRef();
	const [getNextCard, setGetNextCard] = useState(0);
	const [autoDraw, setAutoDraw] = useState(false);
	const [shuffleDeckFlag, setShuffleDeckFlag] = useState(false);

	// get deck ID from API
	useEffect(() => {

		cardImageContainer.current.innerHTML = '';
		setGetNextCard(1);

		async function getAPIDeckID(){

			const response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
			deckIDRef.current = response.data.deck_id;
			// console.log(deckIDRef);

		}

		getAPIDeckID();

	}, [shuffleDeckFlag]);

	// draw next card from API
	useEffect(() => {

		async function drawDeck(){

			// console.log(deckIDRef);
			// console.log(getNextCard);
			const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckIDRef.current}/draw/?count=1`);
			// console.log(response.data);

			// const newCardIndex = getNextCard-1;
			const newCardImage = document.createElement('img');
			newCardImage.src = response.data.cards[0].image;
			newCardImage.alt = response.data.cards[0].code;

			cardImageContainer.current.appendChild(newCardImage)
			
		}
		
		// console.log(deckIDRef)
		if(deckIDRef.current)	// prevent race conditions with the `getAPIDeckID`
			drawDeck();

	}, [getNextCard]);

	// autodraw next card from API
	useEffect(() => {

		if(autoDraw){



		}


		return () => {



		};

	}, [autoDraw]);
	
	function drawNextCard(evt){
		
		evt.preventDefault();
		setGetNextCard((count) => count + 1);


	}

	function toggleAutoDraw(evt){

		evt.preventDefault();
		setAutoDraw((currentValue) => !currentValue);

	}

	function shuffleDeck(evt){

		evt.preventDefault();
		setShuffleDeckFlag((currentFlag) => !currentFlag);

	}

	return(
	<>
		<form>
			<button onClick={drawNextCard}>Draw a Card</button>
			<button onClick={toggleAutoDraw}>Toggle Auto-Draw</button>
			<button onClick={shuffleDeck}>Get a New Deck</button>
		</form>
		<p>Cards Remaining: {52 - getNextCard}</p>
		<div id="card-container" ref={cardImageContainer}>

		</div>
	</>
	);

}

export default Cards;