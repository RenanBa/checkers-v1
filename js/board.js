// Model
var Board = {
  // initialize generates the pieces to display on the board to start the game
  initial: function initial(){
    // initialize two types of rows with X representing squares that are not used to play and with the pieces and empties spots to create the board
  var board = [
                ["X", "green", "X", "green", "X", "green", "X", "green"],
                ["green", "X", "green", "X", "green", "X", "green", "X"],
                ["X", "green", "X", "green", "X", "green", "X", "green"],
                ["empty", "X", "blue", "X", "blue", "X", "empty", "X"],
                ["X", "empty", "X", "empty", "X", "empty", "X", "empty"],
                ["blue", "X", "empty", "X", "empty", "X", "blue", "X"],
                ["X", "blue", "X", "blue", "X", "blue", "X", "blue"],
                ["blue", "X", "blue", "X", "blue", "X", "blue", "X"]
              ];
    return board;
  }, // end of initial

  allTargets: function allTargets(board, playing, notPlaying){
    var targets = [];
    var right = 0;
    var left = 0;
    board.forEach(function(piece, position){
      if (piece == playing){
        var move = Board.findMoves(position, playing);
        move.right = Board.blockPlayerPieces(board, move.right, playing);
        move.left = Board.blockPlayerPieces(board, move.left, playing);

        if (board[move.right] == notPlaying){
          // move.right = Board.targetRight(move.right, board, playing);
          var right = Board.targetRight(move.right, board, playing);
        }
        if (board[move.left] == notPlaying){
          // move.left = Board.targetLeft(move.left, board, playing);
          var left = Board.targetLeft(move.left, board, playing);
        }

        targets.push([position, {left: left, right: right}]);
      }
    })

    return targets;
  },

  blockPlayerPieces: function blockPlayerPieces(board, targetPosition, playing){
    console.log("function blockPlayerPiecesR");
    if (board[targetPosition] == playing){
       return "none";
    } else {
      return targetPosition;
    }
  },

  // calculates where the move will be
  // 9 and 7 will be always used to calculate the possible move
  findMoves: function findMoves(position, playing){
    var position = parseInt(position);
    if (playing == "green"){
      var moves = {right: position + 9, left: position + 7};
    } else if ( playing == "blue"){
      var moves = {right: position - 7, left: position - 9};
    }
    return  moves;
  },

  targetRight: function targetRight(piece, board, playing){
    var piece = parseInt(piece);
    if (playing == "green"){
      var target = piece + 9;
      if (board[target] == "empty"){
        return target;
      } else {
        return "none";
      }
    } else if (playing == "blue"){
      var target = piece - 7;
      if (board[target] == "empty"){
        return target;
      } else {
        return "none";
      }
    }

  },

  targetLeft: function targetLeft(piece, board, playing){
    var piece = parseInt(piece);
    if (playing == "green"){
      var target = piece + 7;
      if (board[target] == "empty"){
        return target;
      } else {
        return "none";
      }
    } else if (playing == "blue"){
         var target = piece - 9;
      if (board[target] == "empty"){
        return target;
      } else {
        return "none";
      }
    }
  },

  // apply the move into the flatten board to update the game state
  makeMove: function makeMove(player, piece, target, board){
    board[piece] = "empty";
    board[target] = player;
    return board;
  },

  capture: function capture(board, piece){
    console.log(piece);
    board[piece] = "empty";
    return board;
  },

   // flatten board receive the current game board and return in one single array
  flatten: function flatten(board){
    var flatBoard = board.reduce(
    function(a,b) {
      return a.concat(b);
    },[]
  );
  return flatBoard;
  },


  // rows will transform a single array board to a 8x8 board arrays
  // rows: function rows(board){
  //   var boardRows = [];
  //   var startRow = 0;
  //   var endRow = 8;
  //   for (i = 0; i <= 7; i++){
  //     boardRows.push(board.slice(startRow, endRow));
  //     startRow += 8;
  //     endRow += 8;
  //   }
  //   return boardRows;
  // },

  // selectedPiece: function selectedPiece(piece, board){
  //   console.log("selectedPiece");
  //   var boardMark = board;
  //   boardMark[piece] = "selected";
  //   return boardMark;
  // },

  // findPosition: function findPosition(board){
  //   console.log("findPosition");
  //   var position = {};
  //   board.forEach(function(array, index){
  //     for(i = 0; i <= array.length; i++){
  //       if (array[i] == "selected"){
  //         position.row = index;
  //         position.column = i;
  //       }
  //     }
  //   })
  //   return position;
  // },

  // possibleMoves: function possibleMoves(piecePosition, board){
  //   console.log(piecePosition);
  //   var boardMark = board;
  //   boardMark[piecePosition.row + 1][piecePosition.column + 1] = "possibleMoves";
  //   boardMark[piecePosition.row + 1][piecePosition.column - 1] = "possibleMoves";
  //   return boardMark;
  // },

} // end of Board`
