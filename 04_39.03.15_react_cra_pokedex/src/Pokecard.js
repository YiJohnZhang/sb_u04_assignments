import React from 'react';
import './Pokecard.css'

const Pokecard = (props) => {

	const {id, name, type, base_experience} = props.data;

	return (
		<div id={name} className="Pokecard-Container">
				<h1>{name}</h1>
				<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name}></img>
				<p><strong>Type</strong>: {type}</p>
				<p><strong>EXP</strong>: {base_experience}</p>
		</div>
	);

}

export default Pokecard;