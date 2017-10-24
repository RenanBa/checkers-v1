// View
$(document).ready(function() {
  console.log("Ready!");
  var game = new Game();

  //Handles clicks on the checkers board
  $(".board").on("click", "a", function(e){
    e.preventDefault();
    game.test(game);

  }) // .board on click, a funciton

}) // end (document).ready

