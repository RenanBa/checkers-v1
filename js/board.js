// Model
var Board = {
  // initialize generates the pieces to display on the board to start the game
  initial: function initial(){
    // initialize two types of rows with X representing squares that are not used to play and with the pieces and empties spots to create the board
  var board = [
                ["X", "green", "X", "green", "X", "green", "X", "green"],
                ["green", "X", "green", "X", "green", "X", "green", "X"],
                ["X", "green", "X", "green", "X", "green", "X", "green"],
                ["empty", "X", "empty", "X", "empty", "X", "empty", "X"],
                ["X", "empty", "X", "empty", "X", "empty", "X", "empty"],
                ["blue", "X", "blue", "X", "blue", "X", "blue", "X"],
                ["X", "blue", "X", "blue", "X", "blue", "X", "blue"],
                ["blue", "X", "blue", "X", "blue", "X", "blue", "X"]
              ];
    return board;
  }, // end of initial

  // flatten board receive the current game board and return in one single array
  flatten: function flatten(board){
    var flatBoard = board.reduce(
    function(a,b) {
      return a.concat(b);
    },[]
  );
  return flatBoard;
  },

// rows will transform a single array board to a 8x8 board arrays
  rows: function rows(board){
    var boardRows = [];
    var startRow = 0;
    var endRow = 8;
    for (i = 0; i <= 7; i++){
      boardRows.push(board.slice(startRow, endRow));
      startRow += 8;
      endRow += 8;
    }
    return boardRows;
  },

  findPosition: function findPosition(board){
    console.log("findPosition");
    var position = {};
    board.forEach(function(array, index){
      for(i = 0; i <= array.length; i++){
        if (array[i] == "selected"){
          position.row = index;
          position.column = i;
        }
      }
    })
    return position;
  },

  possibleMoves: function possibleMoves(piecePosition, board){
    console.log(piecePosition);
    board[piecePosition.row + 1][piecePosition.column + 1] = "possibleMoves";
    board[piecePosition.row + 1][piecePosition.column - 1] = "possibleMoves";
    return board;
  },

} // end of Board`
