import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Todo from './Todo';

test('smoke test', () => {

	render(<Todo />);

});

test('snapshot', () => {
	
	const {asFragment} = render(<Todo />);
	expect(asFragment()).toMatchSnapshot();

});