import React, { useState } from "react";
import pokemonList from "./pokemonList";
import { choice } from "./helpers";

/* Select element to choose from common pokemon. */
function PokemonSelect({ add, pokemon = pokemonList }) {
  const [pokeIdx, setPokeIdx] = useState(0);
  const handleChange = evt => {
    setPokeIdx(evt.target.value);
  };

  function addPokemon(pokemon){
	  add("https://pokeapi.co/api/v2/pokemon", {pathString:pokemon})
  }

  return (
    <div>
      <select onChange={handleChange}>
        {pokemon.map((p, idx) => (
          <option key={idx} value={idx}>
            {p}
          </option>
        ))}
      </select>
      <button onClick={() => addPokemon(pokemon[pokeIdx])}>Catch one!</button>
      <button onClick={() => addPokemon(choice(pokemon))}>I'm feeling lucky</button>
    </div>
  );
}

export default PokemonSelect;
