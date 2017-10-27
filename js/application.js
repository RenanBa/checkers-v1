// Interface Controller
$(document).ready(function() {
  console.log("Ready!");
  // initialize the game and display a board
  game = new Game();

    if(!game.start){
      console.log("start");
      PopulateBoard(game.flattenBoard);
      game.start = true;
    }

  //Handles clicks on the checkers board
  $(".board").on("click", "a", function(e){
    e.preventDefault();
    var element = {href: $(this).attr("href"), className: $(this).attr('class'), idName: $(this).attr("id")};

    if (game.playingNow == element.className && element.className != game.notPlaying && element.className != "empty"){
      game.startProgress();
      var showMoves = game.selectPiece({href: $(this).attr("href")});

      // remove the class that spin the piece and remove the possibleMoves
      $(".spin").removeClass("spin");
      $(".possibleMoves").removeClass("possibleMoves").addClass("empty");
      // add the class spin and possibleMoves
      $("#square"+showMoves.right).removeClass("empty").addClass("possibleMoves");
      $("#square"+showMoves.left).removeClass("empty").addClass("possibleMoves");
      $("#"+$(this).attr("id")).addClass("spin");

    } else if (element.className == "possibleMoves"){
      console.log("MAKE A MOVE");
      console.log(element.className);
      var progressBorad = game.makeMove(element.href);
      PopulateBoard(progressBorad);
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
