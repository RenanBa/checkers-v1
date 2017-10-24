// View
$(document).ready(function() {
  console.log("Ready!");
  var game = new Game();

  $(".board").on("click", "a", function(e){
    e.preventDefault();
    game.test(game);

  })
}) // end (document).ready
