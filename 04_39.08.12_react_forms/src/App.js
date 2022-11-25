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
			<BoxList />

			{/* Part 2: ToDo App */}
			<TodoList />

		</React.Fragment>
	);
}

export default App;
