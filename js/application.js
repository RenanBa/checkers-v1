// View
$(document).ready(function() {
  console.log("Ready!");
  // initialize the game and display a board
  game = new Game();
  PopulateBoard(game.flattenBoard);

  //Handles clicks on the checkers board
  $(".board").on("click", "a", function(e){
    e.preventDefault();
    PlayerClick({
                  href: $(this).attr("href"),
                  className: $(this).attr("class"),
                  idName: $(this).attr("id")
                })
  }) // .board on click, a funciton

}) // end (document).ready


var PopulateBoard = function(board){
  // this forEach run over the flatten board and create elements for each piece and for the available spots which are all set the position with css
  board.forEach(function(value, index){
    if (value == "green"){
      $(".board").append($.parseHTML('<a href="'+(index)+'" id="square'+(index)+'" class="green"></a>'));
    } else if (value == "blue"){
      $(".board").append($.parseHTML('<a href="'+(index)+'" id="square'+(index)+'" class="blue"></a>'));
    } else if (value == "empty"){
      $(".board").append($.parseHTML('<a href="'+(index)+'" id="square'+(index)+'" class="empty"></a>'));
    }
  })
}

var PlayerClick = function(element){
  $("#"+element.idName).addClass("spin");
  game.selectPiece(element);
}
