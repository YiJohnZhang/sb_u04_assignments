import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

function Pokedex(props){
	return (
		<div id="Pokedex-Container">	
			<h1 id='Pokedex-Title'>Pokedex</h1>
			{props.pokedex.map((pokemon) => (
				<Pokecard key={`Pokecard-${pokemon.id}`} data={pokemon}/>
			))}
		</div>
	
	);
}

Pokedex.defaultProps = {
	pokedex: [
		{id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
		{id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
		{id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
		{id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
		{id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
		{id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
		{id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
		{id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
	]
};

export default Pokedex;

// const defaultProps = {
// 	pokedex: [
// 		{id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
// 		{id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
// 		{id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
// 		{id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
// 		{id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
// 		{id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
// 		{id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
// 		{id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
// 		]
// };
	// my work around because of see notes below

// const Pokedex = (props) => (

// 	{ pokedex } = props;

// 	<div>
// 		{pokedex.map((pokemon) => <Pokecard id={pokemon.id} pokemon={pokemon}/>)}
// 	</div>

// );

// Changes function defintion to that an object and doesn't work
// Pokedex.defaultProps = {
// 	pokedex: [
// 		{id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
// 		{id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
// 		{id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
// 		{id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
// 		{id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
// 		{id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
// 		{id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
// 		{id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
// 	]
// };