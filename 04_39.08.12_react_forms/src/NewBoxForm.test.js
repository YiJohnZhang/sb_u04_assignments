import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('smoke test', () => {

	render(<NewBoxForm />);

});

test('snapshot', () => {
	
	const {asFragment} = render(<NewBoxForm />);
	expect(asFragment()).toMatchSnapshot();

});