import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Todo from './Todo';
// import TodoList from './TodoList';

test('smoke test', () => {

	render(<Todo />);

});

test('snapshot', () => {
	
	const {asFragment} = render(<Todo />);
	expect(asFragment()).toMatchSnapshot();

});

test('snapshot 2: some content with `asdf`', () => {
	
	const {asFragment} = render(<Todo todoText='asfd'/>);
	expect(asFragment()).toMatchSnapshot();

});

// point is: i can't test it, i need to test the parent component for the delete behavior
// test('fireEvent: text change, submit & remove todo entry', () => {

// 	console.log(TodoList);

// 	const { queryByText, queryByRole } = render(<Todo todoText='asfd' />);
// 	// console.log(queryByText('x'));
// 	// const deleteToDoEntryButton = queryByRole('button', {'description':'x'});
// 	const deleteToDoEntryButton = queryByText('x');

// 	expect(queryByText('asfd')).toBeInTheDocument();
// 	fireEvent.click(deleteToDoEntryButton);
// 	// expect(queryByText('asfd')).not.toBeInTheDocument();
	

// });