import React, {useState} from 'react';

function NewBoxForm({createNewBox}){

	const INITIAL_FORM_STATE = {
		width:'',
		height:'',
		backgroundColor:''
	};

	const [formState, setFormState] = useState(INITIAL_FORM_STATE);

	function handleChange(evt){

		const {name, value} = evt.target;

		setFormState((formState) => ({
			...formState,
			[name]: value
		}));


	}

	function handleSubmit(evt){

		evt.preventDefault();
		
		formState.width = Number(formState.width);
		formState.height = Number(formState.height);

		createNewBox(formState);
		setFormState(INITIAL_FORM_STATE);
		
	}

	return (

		<form>

			<label htmlFor="width">Width: </label>
			<input name="width"
				data-testid="box-newBox_input-width"
				type="number"
				value={formState.width}
				onChange={handleChange}/>

			<label htmlFor="height">Height: </label>
			<input name="height"
				data-testid="box-newBox_input-height"
				type="number"
				value={formState.height}
				onChange={handleChange}/>

			<label htmlFor="backgroundColor">Background Color: </label>
			<input name="backgroundColor"
				data-testid="box-newBox_input-bgColor"
				type="text"
				value={formState.backgroundColor}
				onChange={handleChange}/>

			<button data-testid="submitButtonName"
				onClick={handleSubmit}>Submit</button>

		</form>
	
	);

}

export default NewBoxForm;