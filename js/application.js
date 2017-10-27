// Interface Controller
$(document).ready(function() {
  console.log("Ready!");
  // initialize the game and display a board
  game = new Game();
  PopulateBoard(game.flattenBoard);

  //Handles clicks on the checkers board
  $(".board").on("click", "a", function(e){
    e.preventDefault();



    var element = {href: $(this).attr("href"), className: $(this).attr('class'), idName: $(this).attr("id")};

    // this if check if the current player is selecting the right piece color and display moves
    if (game.playingNow == element.className && element.className != game.notPlaying && element.className != "empty"){
      game.startProgress(); // this call start to save the board state
      var showMoves = game.selectPiece(element); // here send the selected piece and return the possible moves

      // remove the class that spin the piece and remove the possibleMoves
      $(".spin").removeClass("spin");
      $(".possibleMoves").removeClass("possibleMoves").addClass("empty");
      $(".green").removeClass("empty");
      $(".blue").removeClass("empty");
      // add the class spin and possibleMoves
      $("#square"+showMoves.right).removeClass("empty").addClass("possibleMoves");// show moves on the DOM
      $("#square"+showMoves.left).removeClass("empty").addClass("possibleMoves");// show moves on the DOM
      $("#"+$(this).attr("id")).addClass("spin");

    } else if (element.className == "possibleMoves"){
      // send the position where the piece will be placed and return a new board with the new position
      var progressBorad = game.makeMove(element.href);
      PopulateBoard(progressBorad); //populate the update board
    }
  }) // .board on click, a function

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
