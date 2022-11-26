import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

import Todo from './Todo';
import NewTodoForm from './NewTodoForm';


function TodoList(){

	const [todoList, setTodoList] = useState([]);

	function appendTodoEntry(todoItem){

		const newTodoEntry = {id:uuidv4(), ...todoItem};
		setTodoList([...todoList, newTodoEntry]);

	}

	function shiftTodoEntry(todoID){

		const newTodoList = todoList.filter((entry) => entry.id !== todoID);
		setTodoList(newTodoList);

	}

	function updateToDoEntry(todoID, todoData){


	}

	function toggleTodoStatus(todoID){

		const todoIDIndex = todoList.findIndex((entry) => entry.id === todoID);
		todoList[todoIDIndex].todoStatus = todoList[todoIDIndex].todoStatus === true ? false : true;
		setTodoList(todoList.map((entry) => entry));

	}

	return (

		<div>

			<NewTodoForm createToDoEntry={appendTodoEntry}/>
			<ul>

				{todoList.map((entry) => (
					<Todo
						key={entry.id}
						todoText={entry.todoText}
						completed={entry.todoStatus}
						deleteTodoEntry={() => shiftTodoEntry(entry.id)}
						editTodoEntry={() => updateToDoEntry}
						toggleTodoEntryStatus={() => toggleTodoStatus(entry.id)}
						/>
				))}
				
			</ul>

		</div>

	);
	
}

export default TodoList;

/* React Local Storage Notes:
	similar to vanilla: localStorage.setItem(...)
	then retrieve it by doing TodoList.defaultProps = localStorage.getItem(...)\

	React also allows to do custom hooks, i.e `useLocalStorage`
		also `useState` can dynamically set localStorage.
	https://blog.logrocket.com/using-localstorage-react-hooks/
*/