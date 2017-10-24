// View
$(document).ready(function() {
  console.log("Ready!");
  // initialize the game and create a board
  var game = new Game();
  PopulateBoard(game.flattenBoard());

  //Handles clicks on the checkers board
  $(".board").on("click", function(e){
    e.preventDefault();
    game.test(game);

  }) // .board on click, a funciton

}) // end (document).ready


var PopulateBoard = function(board){

}
