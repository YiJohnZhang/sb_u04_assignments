import React from 'react';
import {render} from '@testing-library/react';
import BoxList from './BoxList';

test('smoke test', () => {

	render(<BoxList />);

});

test('snapshot', () => {
	
	const {asFragment} = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();

});

test('fireEvent (form): fields update', () => {
	const {asFragment} = render(<BoxList />);
	// probably keypress? or set the state?
	// test if the value has changed for the input

});

test('fireEvent (form): form submits', () => {

	// If not props, I am guess mocking or something to set the form initial state?

});

test('fireEvent (form): appends box', () => {

	// I am guess mocking or something to set the form initial state?

});

test('fireEvent (box): delete box', () => {

	// I am guess mocking or something to set the form initial state?

});