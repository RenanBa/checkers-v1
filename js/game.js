// Game Controller
// A checkers board has 64 squares like a chess board but it only uses 32 squares all the same color
// Each player has 12 pieces and pieces that make until the last squares on the enemy side is promoted
// Promoted piece also moves on diagonals with no limit of squares if it is free
// The moves are on diagonal one square at a time
// To capture, the piece capturing jumps the enemy piece advancing two squares on diagonal
// The game end when one of the player lost all pieces or doesn't have moves to make
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
