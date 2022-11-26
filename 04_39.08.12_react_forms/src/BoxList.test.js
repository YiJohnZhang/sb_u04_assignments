import React from 'react';
import {render, fireEvent, queryAllByText} from '@testing-library/react';
import BoxList from './BoxList';

test('smoke test', () => {

	render(<BoxList />);

});

test('snapshot', () => {
	
	const {asFragment} = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();

});

test('fireEvent (form): fields update', () => {
	
	const {queryByTestId} = render(<BoxList />);
	const newboxFormColorInput = queryByTestId('box-newBox_input-bgColor');
		// again, need to standardize `data-testid` naming

	expect(Boolean(newboxFormColorInput)).toBe(true);
	fireEvent.change(newboxFormColorInput, {target: {value:'#0F0'}});
	expect(newboxFormColorInput.value).toBe('#0F0');

});

test('fireEvent (form): form submits and appends box', () => {
	
	const {queryByTestId, queryAllByText, queryByText, debug } = render(<BoxList />);
	const newboxFormWidthInput = queryByTestId('box-newBox_input-width');
	const newboxFormHeightInput = queryByTestId('box-newBox_input-height');
	const newboxFormColorInput = queryByTestId('box-newBox_input-bgColor');

	expect(Boolean(newboxFormWidthInput)).toBe(true);
	expect(Boolean(newboxFormHeightInput)).toBe(true);
	expect(Boolean(newboxFormColorInput)).toBe(true);
	fireEvent.change(newboxFormWidthInput, {target: {value:'150'}});
	fireEvent.change(newboxFormHeightInput, {target: {value:'150'}});
	fireEvent.change(newboxFormColorInput, {target: {value:'#0F0'}});

	const newboxFormCreate = queryByTestId('submitButtonName');
	expect(Boolean(newboxFormCreate)).toBe(true);
	fireEvent.click(newboxFormCreate);
	
	expect(newboxFormColorInput.value).toBe('');
	expect(queryAllByText('x').length).toBe(2);
	// debug();

	// expect(queryByText("width: 150px; height: 150px; background-color: rgb(0, 255, 0);", {ignore:false})).toBeInTheDocument();
	// expect(queryByText("150px", {exact: false, ignore:false})).toBeInTheDocument();
		// not sure why this test is failing, i literally pasted this from the debug() view that renders DOM
		// OH: by default the `ignore` is set to the `script` and `style` nodes.
		// set `ignore` to `false`: https://testing-library.com/docs/queries/bytext/#ignore
	
	
	
	// expect(container.firstChild).toHaveStyle(`background-image: url(${props.image})`)
		// One possible way if you could select it is to test the CSS: https://stackoverflow.com/a/56674118


});

test('fireEvent (box): delete box', () => {
	
	const { queryByText, queryAllByText, debug } = render(<BoxList />);

	const deleteBoxButton = queryByText('x');
	expect(Boolean(deleteBoxButton)).toBe(true);
	expect(queryAllByText('x').length).toBe(1);
	fireEvent.click(deleteBoxButton);
	expect(queryAllByText('x').length).toBe(0);

});