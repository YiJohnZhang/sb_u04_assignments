import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 */

function Board({ nrows, ncols, chanceLightStartsOn }) {

	/** create a board nrows high/ncols wide, each cell randomly lit or unlit */
	function createBoard(numberOfRows = nrows, numberOfColumns = ncols) {
		
		let initialBoard = [];
		
		for(let i=0; i<numberOfRows; i++){

			let boardRow = Array(numberOfColumns);

			for(let j=0; j<numberOfColumns; j++){

				let randomOnOrOff = Math.floor(Math.random()*2);

				if(randomOnOrOff){
					boardRow[j] = true;
				}else{
					boardRow[j] = false;
				}

			}

			initialBoard.push(boardRow);

		}

		return initialBoard;

	}

	const [board, setBoard] = useState(createBoard());
	const [gameOver, setGameOver] = useState(false);

	function hasWon() {

		function _checkBoard(rowIndex = 0, columnIndex = 0){

			console.log(`col: ${columnIndex}; row: ${rowIndex}`)

			if(rowIndex == nrows) return _checkBoard(0, columnIndex + 1);
			if(columnIndex == ncols) return true;

			return (board[rowIndex][columnIndex] === false) && _checkBoard(rowIndex + 1, columnIndex);

		}

		return _checkBoard();

	}

	function flipCellsAround(coordinates) {

		//	disable game if game over
		if(gameOver)
			return;
		
		setBoard(oldBoard => {

			// const [y, x] = coord.split("-").map(Number);
			const {x, y} = coordinates;

			const flipCell = (y, x, boardCopy) => {

				// if this coord is actually on board, flip it
				if (x >= 0 && x < ncols && y >= 0 && y < nrows)	boardCopy[y][x] = !boardCopy[y][x];

			};

			let newBoard = oldBoard.map((nestedArray) => nestedArray.map((element) => element));

			// //	"in the copy, flip this cell and the cells around it"?

			flipCell(y, x, newBoard);
			flipCell(y-1, x, newBoard);
			flipCell(y+1, x, newBoard);
			flipCell(y, x-1, newBoard);
			flipCell(y, x+1, newBoard);
			
			return newBoard;

		});

		setGameOver(hasWon());

	}

	// if the game is won, just show a winning msg & render nothing else

	return (

		<table>

			<tbody>

				{!gameOver && board.map((nestedRow, yIndex) => {

					return (

						<tr key={`row-${yIndex}`}>

							{nestedRow.map((cellStatus, xIndex) => (

								<Cell
									key={`cell-${yIndex}-${xIndex}`}
									coordinates={{x: xIndex, y:yIndex}}
									isLit={cellStatus}
									flipCellsAroundMe={flipCellsAround}/>
							))}

						</tr>

				)})}

				<td>{gameOver && <p>You Won</p>}</td>

			</tbody>

		</table>

		// <table>

		// 	{board.map((nestedRow, yIndex) => (

		// 		<tr>
		
		// 			{nestedRow.map((cell, xIndex) => (

		// 				<Cell
		// 					isLit={cell}
		// 					flipCellsAroundMe={(event) => flipCellsAround({x:xIndex, y:yIndex})}/>
		// 			))}
	
		// 		</tr>
			
		// 	))}

		// </table>

	);

}

export default Board;