import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('smoke test', () => {

	render(<NewBoxForm />);

});

test('snapshot: empty form', () => {
	
	const {asFragment} = render(<NewBoxForm />);
	expect(asFragment()).toMatchSnapshot();

});

test('fireEvent: fields update', () => {

	// If not props, I am guess mocking or something to set the form initial state?

});

test('fireEvent: form submits', () => {

	// If not props, I am guess mocking or something to set the form initial state?

});

test('fireEvent: appends box', () => {

	// I am guess mocking or something to set the form initial state?

});