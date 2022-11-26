import React, {useState} from 'react';

function NewTodoForm({createToDoEntry}){

	const INTIIAL_FORM_STATE = {
		todoText: ''
	};

	const [formState, setFormState] = useState(INTIIAL_FORM_STATE);
	
	function handleChange(evt){

		const {name, value} = evt.target;
		setFormState({
			[name]: value
		});

	}

	function handleSubmit(evt){

		evt.preventDefault();
		createToDoEntry(formState);
		setFormState(INTIIAL_FORM_STATE);

	}

	return (

		<form>

			<label htmlFor="todoText"><strong>Todo Entry</strong>: </label>
			<input name="todoText"
				type="text"
				data-testid="Todo-input_text"
				placeholder="entry..."
				value={formState.todoText}
				onChange={handleChange}
				/>

			<button data-testid="createTodo" onClick={handleSubmit}>New Item</button>


		</form>

	);

}

export default NewTodoForm;