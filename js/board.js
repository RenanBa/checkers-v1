// Model
var Board = {
  // initialize generates the pieces to display on the board to start the game
  initial: function initial(){
    var board = []; // this will save the initial state of the board
    // Creates all the 32 squares where pieces can be placed
    for (i = 0; i <= 31; i++){
      if (i <= 11){ // Creates all 12 green pieces
        $(".board").append($.parseHTML('<a href="'+(i+1)+'" id="square'+(i+1)+'" class="green"></a>'));
        board.push("green");
      } else if (i >= 12 && i <= 19){ // creates all 12 empty squares
        $(".board").append($.parseHTML('<a href="'+(i+1)+'" id="square'+(i+1)+'" class="empty"></a>'));
        board.push("empty");
      } else if (i >= 20){ // creates all 12 blue pieces
        $(".board").append($.parseHTML('<a href="'+(i+1)+'" id="square'+(i+1)+'" class="blue"></a>'));
        board.push("blue");
      }
    }
    return board;
  }, // end of initial

  pieceSelected: function pieceSelected(){

  }

} // end of Board
