import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Box from './Box';

test('smoke test', () => {

	render(<Box />);

});

test('snapshot', () => {
	
	const {asFragment} = render(<Box />);
	expect(asFragment()).toMatchSnapshot();

});