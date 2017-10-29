// Interface Controller
$(document).ready(function() {
  console.log("Ready!");
  // initialize the game and display a board
  game = new Game();

  PopulateBoard(game.flattenBoard);

  // check the board for pieces that are on target for a jump
  ShowTargets(game.lookForTargets());

  // game.allTargetsCollection(game.lookForTargets());


  //Handles clicks on the checkers board
  $(".board").on("click", "a", function(e){
    e.preventDefault();
    var element = {href: $(this).attr("href"), className: $(this).attr('class'), idName: $(this).attr("id")};

    // if the there are targets for jumps
    if (game.allTargets.length > 0){
       // if the the selected piece on the board is the piece that can make a jump
      if (JumpMoves(game.pieceToJump, element.href)){
        console.log(element.href + " GOOD TO MOVE!");
        // return the jump targets
        var showMoves = ValidMove(element.href);
        console.log(showMoves);
        // send the jump targets to be displayed on the board
        PieceMoves(showMoves.right, showMoves.left);
      }
    } else{
      PieceSelected(element);
    }



  }) // .board on click, a function
}) // end (document).ready

var ResetSqaure = function(){
  $(".possibleMoves").removeClass("possibleMoves").addClass("empty");
  $(".green").removeClass("empty");
  $(".blue").removeClass("empty");
}

var PieceSelected = function(element){
    // this if check if the current player is selecting the right piece color and display moves
    if (game.playingNow == element.className && element.className != "empty"){
      game.startProgress(); // this call start to save the board state
      var showMoves = game.selectPiece(element); // here send the selected piece and return the possible moves
      ResetSqaure();
      PieceMoves(showMoves.right, showMoves.left);
    } else if (element.className == "possibleMoves" && game.currentPiece > 0){
      // send the position where the piece will be placed and return a new board with the new position
      var progressBorad = game.makeMove(element.href);
      game.changeTurn();

      PopulateBoard(progressBorad); //populate the update board
      ShowTargets(game.lookForTargets());
      game.allTargetsCollection(game.lookForTargets());
    }

}

// display n the board the possible moves form a selected piece
var PieceMoves = function(moveRight, moveLeft){
    $("#square"+moveRight).removeClass("empty").addClass("possibleMoves");// show moves on the DOM
    $("#square"+moveLeft).removeClass("empty").addClass("possibleMoves");// show moves on the DOM

    $(".green").removeClass("possibleMoves");
    $(".blue").removeClass("possibleMoves");
}

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

// receive an array of squares on target in the board and display on the on the board
var ShowTargets = function(board){
  board.forEach(function(value, index){
    $("#square"+value).removeClass("empty").addClass("possibleMoves");// show moves on the DOM
  })
}

// check if the the selected piece is in the array that have all the piece that have a possible jump
var JumpMoves = function (piecesJump, selectedPiece) {
  for ( i = 0; i <= piecesJump.length; i++){
    if (piecesJump[i] == selectedPiece){
      return true;
    }
  }
}

// return the valid for when there are jumps on the board
var ValidMove = function(move){
  var targets = {}
  game.validMove.forEach(function(array, index){
    if (move == array[0]){
      targets = array[1];
    }
  })
  return targets;
}
