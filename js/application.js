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
  board.forEach(function(value, index){

    if (value == "green"){
      console.log("GREEN");
      console.log(index);
      $(".board").append($.parseHTML('<a href="'+(index+1)+'" id="square'+(index+1)+'" class="green"></a>'));
    } else if (value == "blue"){
      console.log("blue");
      // $(".board").append($.parseHTML('<a href="'+(index+1)+'" id="square'+(index+1)+'" class="blue"></a>'));
    } else if (value == "empty"){
      console.log("Empty");
      $(".board").append($.parseHTML('<a href="'+(index+1)+'" id="square'+(index+1)+'" class="empty"></a>'));
    } else {
      $(".board").append($.parseHTML('<div class="null"></div>'));
    }

  })
}
