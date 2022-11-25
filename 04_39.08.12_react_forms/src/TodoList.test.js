import React from 'react';
import {render} from '@testing-library/react';
import TodoList from './TodoList';

test('smoke test', () => {

	render(<TodoList />);

});

test('snapshot', () => {
	
	const {asFragment} = render(<TodoList />);
	expect(asFragment()).toMatchSnapshot();

});