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