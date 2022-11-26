import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import TodoList from './TodoList';

test('smoke test', () => {

	render(<TodoList />);

});

test('snapshot', () => {
	
	const {asFragment} = render(<TodoList />);
	expect(asFragment()).toMatchSnapshot();

});

test('fireEvent (form): fields update', () => {

	const { queryByTestId } = render(<TodoList />);
	const todoFormInput = queryByTestId('Todo-input_text');
	
	expect(Boolean(todoFormInput)).toBe(true);
	fireEvent.change(todoFormInput, {target: {value:'hello'}});
	expect(todoFormInput.value).toBe('hello');
		// yay

});

test('fireEvent (form): form submits and appends entry', () => {

	const { queryByTestId, queryByText } = render(<TodoList />);
	// console.log(queryByRole('textbox', {'description': 'entry...'}))
	const todoFormInput = queryByTestId('Todo-input_text');
	const todoFormCreate = queryByTestId('createTodo');
		// Consider standardizing testid naming conventions later
	expect(Boolean(todoFormInput)).toBe(true);
	expect(Boolean(todoFormCreate)).toBe(true);
	// console.log(Boolean(todoFormInput) == true);
	// console.log(Boolean(todoFormCreate) == true);
	
	fireEvent.change(todoFormInput, {target: {value:'hello'}});
	expect(todoFormInput.value).toBe('hello');

	fireEvent.click(todoFormCreate);
	expect(todoFormInput.value).toBe('');
	expect(queryByText("hello")).toBeInTheDocument();
		// this is guaranteed to be the new todo hello.

	
});

test('fireEvent (todo): delete todo', () => {

	const { queryByTestId, queryByText } = render(<TodoList />);
	const todoFormInput = queryByTestId('Todo-input_text');
	const todoFormCreate = queryByTestId('createTodo');
	expect(Boolean(todoFormInput)).toBe(true);
	expect(Boolean(todoFormCreate)).toBe(true);
	
	fireEvent.change(todoFormInput, {target: {value:'hello'}});
	fireEvent.click(todoFormCreate);
	expect(queryByText("hello")).toBeInTheDocument();
		// this is guaranteed to be the new todo hello.
	
	const deleteTodoEntryButton = queryByTestId('deleteTodo');
	fireEvent.click(deleteTodoEntryButton);
	expect(queryByText("hello")).not.toBeInTheDocument();

});