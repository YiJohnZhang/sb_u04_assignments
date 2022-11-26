import React from 'react';

function Todo({todoText, completed, deleteTodoEntry, editTodoEntry, toggleTodoEntryStatus}){

	return (
		<li>
			<button data-test-id="deleteTodo" onClick={deleteTodoEntry}>x</button>&nbsp;&nbsp;&nbsp;
			{/* <span style={completed === true ? {textDecoration:line-through} : ''} onClick={toggleTodoStatus}>{todoText}</span> */}
			<span
				style={completed === true ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontStyle:'italic'} : {textDecoration:'none', fontStyle:'normal'}}
				onClick={toggleTodoEntryStatus}>
					{todoText}
			</span>

		</li>
	);

}

export default Todo;