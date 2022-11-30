import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';

function Cards(){

	let deckIDRef = useRef(null);
	let timerIntervalID = useRef();
	const cardImageContainer = useRef();
	const [cardsRemaining, setCardsRemaining] = useState(52);
	const [drawCardFlag, setDrawCardFlag] = useState(false);
	const [autoDraw, setAutoDraw] = useState(false);
	const [shuffleDeckFlag, setShuffleDeckFlag] = useState(false);

	// get deck ID from API
	useEffect(() => {

		cardImageContainer.current.innerHTML = '';
		setCardsRemaining(52);

		async function getAPIDeckID(){

			const response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
			deckIDRef.current = response.data.deck_id;

		}

		getAPIDeckID();

	}, [shuffleDeckFlag]);

	// draw next card from API
	useEffect(() => {

		async function drawDeck(){

			const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckIDRef.current}/draw/?count=1`);

			const newCardImage = document.createElement('img');
			newCardImage.src = response.data.cards[0].image;
			newCardImage.alt = response.data.cards[0].code;
			setCardsRemaining(response.data.remaining);

			cardImageContainer.current.appendChild(newCardImage)
			
		}
		
		if(deckIDRef.current)	// prevent race conditions with the `getAPIDeckID`
			drawDeck();

	}, [drawCardFlag]);

	// autodraw next card from API
	useEffect(() => {

		if(autoDraw){
		
			timerIntervalID.current = setInterval(drawNextCard, 1000);
		
		}else{

			clearInterval(timerIntervalID.current);

		}

	}, [autoDraw]);
	
	function drawNextCard(){

		setDrawCardFlag((drawCardFlag) => !drawCardFlag);

	}

	function toggleAutoDraw(){

		setAutoDraw((currentValue) => !currentValue);

	}

	function shuffleDeck(){
		
		setShuffleDeckFlag((currentFlag) => !currentFlag);

	}

	return(
	<>
		<button onClick={drawNextCard}>Draw a Card</button>
		<button onClick={toggleAutoDraw}>Toggle Auto-Draw</button>
		<button onClick={shuffleDeck}>Get a New Deck</button>
		<p>Cards Remaining: {cardsRemaining}</p>
		<div id="card-container" ref={cardImageContainer}>

		</div>
	</>
	);

}

export default Cards;