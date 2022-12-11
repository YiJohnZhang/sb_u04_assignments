import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

function NewColor({addColor}){

	const INTITIAL_FORM_STATE = {
		color: '',
		colorName: ''
	}

	const history = useHistory();
	const [formState, setFormState] = useState(INTITIAL_FORM_STATE);

	function handleChange(evt){

		const {name, value} = evt.target;
		setFormState({
			...formState,
			[name]: value
		});

	}

	function handleSubmit(evt){

		evt.preventDefault();
		addColor({color: formState.color, colorName: formState.colorName});
		// setFormState(INTITIAL_FORM_STATE);
		history.push('/colors');

	}

	return(
	<form>
		<input name="color"
			type="color"
			onChange={handleChange}
			value={formState.color}/>
		<input name="colorName"
			type="text"
			placeholder='color name'
			onChange={handleChange}
			value={formState.colorName}/>
		<button onClick={handleSubmit}>Add Color!</button>
	</form>
	);
	

}

export default NewColor;