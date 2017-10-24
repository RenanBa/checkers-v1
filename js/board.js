// Model
var Board = {
  // initialize generates the pieces to display on the board to start the game
  initial: function initial(){
    var rows = 8;
    // initialize two types of rows with X representing squares that are not used to play and with the pieces and empties spots to create the board
    var rowGreenPositionEven = ["X", "green", "X", "green", "X", "green", "X", "green"];
    var rowGreenPositionOdd = ["green", "X", "green", "X", "green", "X", "green", "X"];
    var rowEmptyPositionEven = ["X", "empty", "X", "empty", "X", "empty", "X", "empty"];
    var rowEmptyPositionOdd = ["empty", "X", "empty", "X", "empty", "X", "empty", "X"];
    var rowBluePositionEven = ["X", "blue", "X", "blue", "X", "blue", "X", "blue"];
    var rowBluePositionOdd = ["blue", "X", "blue", "X", "blue", "X", "blue", "X"];
    var board = []; // this will save the initial state of the board
    //this loop check if it is a odd or even row that needs to be pushed into the board
    for (var i = 0; i < rows; i++){
      if (i <= 2){
        board.length%2 == 0 ? board.push(rowGreenPositionEven) : board.push(rowGreenPositionOdd);
      } else if(i > 2 && i < 5){
        board.length%2 == 0 ? board.push(rowEmptyPositionEven) : board.push(rowEmptyPositionOdd);
      } else if(i >= 5 && i <= rows){
        board.length%2 == 0 ? board.push(rowBluePositionEven) : board.push(rowBluePositionOdd);
      }
    }

    return board;
  }, // end of initial

} // end of Board`
