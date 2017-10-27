// Interface Controller
$(document).ready(function() {
  console.log("Ready!");
  // initialize the game and display a board
  game = new Game();


  PopulateBoard(game.flattenBoard);

  //Handles clicks on the checkers board
  $(".board").on("click", "a", function(e){
    e.preventDefault();
    $(".spin").removeClass("spin");
    // PopulateBoard(game.tempFlattenBoard);
    if (game.playingNow == "green" && $(this).attr('class') != "blue" && $(this).attr('class') != "empty"){
        game.startProgress();
      var showMoves = game.selectPiece({href: $(this).attr("href")});
      // PopulateBoard(showMoves);
      $("#"+$(this).attr("id")).addClass("spin");
    } else {
      console.log("MAKE A MOVE");
    }
  }) // .board on click, a funciton

}) // end (document).ready



var PopulateBoard = function(board){
  $(".board a").remove();
  // this forEach run over the flatten board and create elements for each piece and for the available spots which are all set the position with css
  board.forEach(function(value, index){
    if (value == "green"){
      $(".board").append($.parseHTML('<a href="'+(index)+'" id="square'+(index)+'" class="green"></a>'));
    } else if (value == "blue"){
      $(".board").append($.parseHTML('<a href="'+(index)+'" id="square'+(index)+'" class="blue"></a>'));
    } else if (value == "empty"){
      $(".board").append($.parseHTML('<a href="'+(index)+'" id="square'+(index)+'" class="empty"></a>'));
    } else if (value == "possibleMoves"){
      $(".board").append($.parseHTML('<a href="'+(index)+'" id="square'+(index)+'" class="possibleMoves"></a>'));
    }
  })
}
