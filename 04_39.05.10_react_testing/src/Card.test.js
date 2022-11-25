import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test('smoke test', () => {
	render(<Card />)
});

test('snapshot: baseline', () => {
	const {asFragment} = render(<Card />);
	expect(asFragment()).toMatchSnapshot();
});