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

} // end of Board`
