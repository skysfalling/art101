// Tetris.
// A Simple Version of Tetris.
// @link   URL
// @file   This file runs Tetris to an html web page.
// @author Sky Casey , Kari Kranich.
// @since  10/12/2022

// <<  ON START >>
// Loop through 10 x 12 double array for game board and initialize
// Create preset pieces by saving square placement in arrays
// << BEGIN GAME >>
// Begin “ Tick Loop “ 
// 	If new piece not spawned …
// 		Randomly Spawn piece type at top of game board
// 	For every tick, more the current piece down the board 1 square
// 	If curr piece lands , create new random piece (add to score)
//	Else if curr piece has a part above the board, game over