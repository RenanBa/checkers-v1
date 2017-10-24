// Model
var Board = {
  rows: 8,
  rowPositionEven: ["X", "PLACE", "X", "PLACE", "X", "PLACE", "X", "PLACE"],
  rowPositionOdd: ["PLACE", "X", "PLACE", "X", "PLACE", "X", "PLACE", "X"],

  // initialize generates the pieces to display on the board to start the game
  initial: function initial(){
    var board = []; // this will save the initial state of the board
      for (var i = 0; i < 8; i++)
        if (board.length%2 == 0){
          board.push(Board.rowPositionEven);
        } else {
          board.push(Board.rowPositionOdd);
        }

    return board;
  }, // end of initial

  pieceSelected: function pieceSelected(){

  },

} // end of Board
