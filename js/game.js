// Game Controller
// A checkers board has 64 squares like a chess board but it only uses 32 squares all on dark color
// Each player has 12 pieces and pieces that make until the last squares on the enemy side is promoted
// Promoted piece also moves on diagonals with no limit of squares if it is free
// The moves are on diagonal one square at a time
// To capture, the piece capturing jumps the enemy piece advancing two squares on diagonal
// The game end when one of the player lost all pieces or doesn't have moves to make

/*
  When the page is loaded the piece are placed on the board.
  When the player click on the piece:
    - The Application Controller send the HTML element that was clicked on the board to the game controller.
    - The Game Controller will check if the click was to select a piece or to execute a move:
      1- If selecting a piece:
        - Game controller will send a track board and the selected piece id to the Board Model.
        - The Board Model will calculate and check the square to move:
          * if they are available:
            1* return the possible moves.
          * else if not available, check which piece color is occupying the square to move into:
            1* if the color is from the same player playing that move isn't available.
            2* if the color is from the other player and there is no other piece after, that move will show as a capturing move.
        - The Game Controller will save the selected piece for the next click to trigger the move.
        - Game Controller send to the Application Controller the new state of the board
      2- Else if making a move
        - The Game Controller will send the selected piece and the square that the player choose to place the piece to the board.
        - The Board Model will calculate a new board with the new state of the game board.
        - The Game controller send the board back to the Board Model to check if the new moved piece have another piece to capture
          before send the new board back to Application Controller.
          * Here repeats the same logic done on the If above to look for the opposite color and show the capturing move
    - After the Game Controller makes the decision it will return the board with the new state of the game
    - The Application Controller will remove all the elements from the board that
      represents the piece and re-populate the board with the new game state

  Game Controller will have a prototype to check if there is a winner, tie or if the game is still going
  Application controller will call the prototype in the Game Controller to check if the game isn't ended

  Promoting a piece to King:
    - When a piece reach end of the other side in the board, that piece will be promoted to kind.

*/
function Game() {
  /* Board.initial generate all elements used to be pieces and empty squares on the
  board and return an array of the board initial position*/
  this.board = Board.initial();
  this.boardTest = Board.initial();
  this.flattenBoard = Board.flatten(this.board);
  this.flattenBoardTest = Board.flatten(this.board);
  this.player = "green";
  this.playerMove = false;
}

Game.prototype.selectPiece = function(element){
  if (!this.playerMove){
    console.log(element.href);
    var flatBoardSelect = Board.selectedPiece(element.href, this.flattenBoardTest);

    var boardRows = Board.rows(flatBoardSelect); // make 8x8 board array
    var selectedPieceBoardRow = Board.findPosition(boardRows); // look for the value "selected" and collect the ids

    var boardPossibleMoves = Board.possibleMoves(selectedPieceBoardRow, this.boardTest);
    var moveOptionsBoard = Board.flatten(boardPossibleMoves);
    moveOptionsBoard[element.href] = this.player;

    this.playerMove = true;


    return moveOptionsBoard;
  } else {
    console.log(this.board);
    return this.flattenBoard;
  }
  // Board.showMoves(element.href, this.board);
}
