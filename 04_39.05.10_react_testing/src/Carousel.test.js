import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

test('smoke test', () => {
	render(<Carousel />);
});

test('snapshot: baseline', () => {
	const {asFragment} = render(<Carousel />);
	expect(asFragment()).toMatchSnapshot();
});

test('event: carousel wraps for left arrow', () => {

	const { queryByAltText, queryByTestId } = render(<Carousel />);
	const leftArrowButtonElement = queryByTestId('left-arrow');

	expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).toBeInTheDocument();
	expect(queryByAltText('Photo by Pratik Patel on Unsplash')).not.toBeInTheDocument();
	expect(queryByAltText('Photo by Josh Post on Unsplash')).not.toBeInTheDocument();

	//	wraps to (3)
	fireEvent.click(leftArrowButtonElement);
	expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).not.toBeInTheDocument();
	expect(queryByAltText('Photo by Pratik Patel on Unsplash')).not.toBeInTheDocument();
	expect(queryByAltText('Photo by Josh Post on Unsplash')).toBeInTheDocument();

	// to (2)
	fireEvent.click(leftArrowButtonElement);
	expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).not.toBeInTheDocument();
	expect(queryByAltText('Photo by Pratik Patel on Unsplash')).toBeInTheDocument();
	expect(queryByAltText('Photo by Josh Post on Unsplash')).not.toBeInTheDocument();

	

});

test('event: carousel wraps for right arrow', () => {

	const {queryByAltText, queryByTestId} = render(<Carousel />);
	const rightArrowButtonElement = queryByTestId('right-arrow');

	expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).toBeInTheDocument();
	expect(queryByAltText('Photo by Pratik Patel on Unsplash')).not.toBeInTheDocument();
	expect(queryByAltText('Photo by Josh Post on Unsplash')).not.toBeInTheDocument();

	// wraps to (1)
	fireEvent.click(rightArrowButtonElement);	// 2
	fireEvent.click(rightArrowButtonElement);	// 3
	fireEvent.click(rightArrowButtonElement);	// 1
	expect(queryByAltText('Photo by Richard Pasquarella on Unsplash')).toBeInTheDocument();
	expect(queryByAltText('Photo by Pratik Patel on Unsplash')).not.toBeInTheDocument();
	expect(queryByAltText('Photo by Josh Post on Unsplash')).not.toBeInTheDocument();

});


it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});
