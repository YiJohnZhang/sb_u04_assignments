import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('smoke test', () => {

	render(<NewTodoForm />);

});

test('snapshot', () => {
	
	const {asFragment} = render(<NewTodoForm />);
	expect(asFragment()).toMatchSnapshot();

});