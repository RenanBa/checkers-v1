// Game Controller
// A checkers board has 64 squares like a chess board but it only uses 32 squares all the same color
// Each player has 12 pieces and pieces that make until the last squares on the enemy side is promoted
// Promoted piece also moves on diagonals with no limit of squares if it is free
// The moves are on diagonal one square at a time
// To capture, the piece capturing jumps the enemy piece advancing two squares on diagonal
// The game end when one of the player lost all pieces or doesn't have moves to make
function Game() {
  this.board = Board.initial();
}

