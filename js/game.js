// Game Controller
// A checkers board has 64 squares like a chess board but it only uses 32 squares all on dark color
// Each player has 12 pieces and pieces that make until the last squares on the enemy side is promoted
// Promoted piece also moves on diagonals with no limit of squares if it is free
// The moves are on diagonal one square at a time
// To capture, the piece capturing jumps the enemy piece advancing two squares on diagonal
// The game end when one of the player lost all pieces or doesn't have moves to make

/*
  When the page is loaded the piece are placed on the board.
  When the player click on the piece:
    - The Application Controller send the HTML element that was clicked on the board to the game controller.
    - The Game Controller will check if the click was to select a piece or to execute a move:
      1- If selecting a piece:
        - Game controller will send a track board and the selected piece id to the Board Model.
        - The Board Model will calculate and check the square to move:
          * if they are available:
            1* return the possible moves.
          * else if not available, check which piece color is occupying the square to move into:
            1* if the color is from the same player playing that move isn't available.
            2* if the color is from the other player and there is no other piece after, that move will show as a capturing move.
        - The Game Controller will save the selected piece for the next click to trigger the move.
        - Game Controller send to the Application Controller the new state of the board
      2- Else if making a move
        - The Game Controller will send the selected piece and the square that the player choose to place the piece to the board.
        - The Board Model will calculate a new board with the new state of the game board.
        - The Game controller send the board back to the Board Model to check if the new moved piece have another piece to capture
          before send the new board back to Application Controller.
          * Here repeats the same logic done on the If above to look for the opposite color and show the capturing move
    - After the Game Controller makes the decision it will return the board with the new state of the game
    - The Application Controller will remove all the elements from the board that
      represents the piece and re-populate the board with the new game state

  Game Controller will have a prototype to check if there is a winner, tie or if the game is still going
  Application controller will call the prototype in the Game Controller to check if the game isn't ended

  Promoting a piece to King:
    - When a piece reach end of the other side in the board, that piece will be promoted to kind.

*/
function Game() {
  /* Board.initial generate all elements used to be pieces and empty squares on the
  board and return an array of the board initial position*/
  this.board = Board.initial(); //initialized the board
  this.boardsCollection = []; // this array will save the game progress with a collection of boards
  this.flattenBoard = Board.flatten(this.board); // flatten current board to populate the DOM
  this.tempFlattenBoard = Board.flatten(this.board);// make a temporary copy of the flatten board to mark the selected piece
  this.playingNow = "green";
  this.notPlaying = "blue";
  this.showingMoves = false;
  this.currentPiece = 0; //save the selected piece to execute the move
  this.start = false;
  this.rightTarget = {enemy: 0, square: 0};
  this.leftTarget = {enemy: 0, square: 0};
  this.onTarget = false;
  this.allTargets = [];
  this.pieceToJump = [];
  this.validMove = [];
}

Game.prototype.lookForTargets = function(){
  // Board.allTargets return an array with all the pieces that has chance for jump
  // each value of this array has the piece to jump and the target square
  var targets = Board.allTargets(this.flattenBoard, this.playingNow, this.notPlaying);
  var allTargets = [];
  var pieceToJump = [];
  // loop over the targets if the target square has a valid jump
  targets.forEach(function(value, index){
    if (value[1].left !== undefined){
      allTargets.push(value[1].left);
    }
    if (value[1].right !== undefined){
      allTargets.push(value[1].right);
    }
    if (value[1].right !== undefined || value[1].left !== undefined){
      pieceToJump.push(value[0]);
      this.onTarget = true;
    }
  })
  this.validMove = targets;
  this.pieceToJump = pieceToJump;
  this.allTargets = allTargets;
  return allTargets;
}

Game.prototype.selectPiece = function(element){
  // console.log(this.allTargets);


  this.currentPiece = element.href; //save the piece selected

  // Board.findMoves return a object with two value
  var targets = Board.findMoves(element.href, this.playingNow); // send the selected piece and return the id for possible moves

  // check if the possible moves have the same team color and if does change the id to none
  targets.right = Board.blockPlayerPieces(this.flattenBoard, targets.right, this.playingNow);
  targets.left = Board.blockPlayerPieces(this.flattenBoard, targets.left, this.playingNow);


  // check if the possible moves have the opposite player piece, if so that piece will be on target
  if (this.flattenBoard[targets.right] == this.notPlaying) {
    console.log("enemy on right");
    this.onTarget = true; // set onTarget to true
    this.rightTarget.enemy = targets.right; //save the position of the piece on target
    // save the new square where the piece will be placed
    targets.right = Board.targetRight(targets.right, this.flattenBoard, this.playingNow);
    this.rightTarget.square = targets.right;// save the
  }
  if (this.flattenBoard[targets.left] == this.notPlaying) {
    console.log("enemy on left");
    this.onTarget = true;
    this.leftTarget.enemy = targets.left;
    targets.left = Board.targetLeft(targets.left, this.flattenBoard, this.playingNow);
    this.leftTarget.square = targets.left;
  }
  return (targets);
}

Game.prototype.makeMove = function(position){
  // send the player color, the selected piece, the position and the current board to make the move
  // and return a updated flattenBoard
  if (this.onTarget == true){
    if (this.rightTarget.square == position){
      this.flattenBoard = Board.capture(this.flattenBoard, this.rightTarget.enemy);
    } else if (this.leftTarget.square == position){
      this.flattenBoard = Board.capture(this.flattenBoard, this.leftTarget.enemy);
    }
  }

  return Board.makeMove(this.playingNow, this.currentPiece, position, this.flattenBoard);
}

Game.prototype.changeTurn = function(){
  if (this.playingNow == "green"){
    this.playingNow = "blue";
    this.notPlaying = "green";
  } else if (this.playingNow == "blue"){
    this.playingNow = "green";
    this.notPlaying = "blue";
  }
  this.showingMoves = false;
  this.currentPiece = 0;
  this.onTarget = false;
}

Game.prototype.allTargetsCollection = function(targets){
  this.allTargets = targets;
}

// Save every game board change into an array
Game.prototype.startProgress = function(board){
  if (this.boardsCollection.length == 0 && !this.showingMoves){
    this.boardsCollection.push(Board.initial());
  }else if (!this.showingMoves){
    this.boardsCollection.push(this.board);
  }
}
