import {useState} from 'react';

function useFlip(initialState = false){

	const [state, setState] = useState(initialState);

	function toggleState(){
		setState((state) => !state);
	}

	return [state, toggleState];

}

export default useFlip;