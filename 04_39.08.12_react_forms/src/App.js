import React from 'react';
import BoxList from './BoxList';

import TodoList from './TodoList';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<React.Fragment>
			
			{/* Part 1: Color Box Maker */}
			<h1>Color Box Maker</h1>
			<BoxList />

			{/* Part 2: Todo App */}
			<h1>Todo List</h1>
			<TodoList />

		</React.Fragment>
	);
}

export default App;
