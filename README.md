## On this project I'm building a Checkers game with:
  1. JavaScript interface independent of the backend (js/application.js).
  2. A controller (js/game.js) to receive data and requests from the interface and manipulate the board.
  3. A complex JS model independent of the interface (js/board.js).

### checkers-v1
This project is an update version of the game [Checkers](https://github.com/RenanBa/Checkers) which I built in a single JavaScript file.

#### About the game:
* Checkers is played on a standard 64 square board. Only the 32 dark colored squares are used in play. Each player begins the game with 12 pieces, or checkers, placed in the three rows closest to him or her.
* The object of the game is to capture all of your opponent’s checkers or position your pieces so that your opponent has no available moves.

#### Movement:
* Basic movement is to move a checker one space diagonally forward. You can not move a checker backwards until it becomes a King.
* Once a piece become a King this piece can move on many spaces possibles if the spaces are available in one of diagonal directions either forward or backwards.

#### Jump or Capturing:
* If one of your opponent’s checkers is on a forward diagonal next to one of your checkers, and the next space beyond the opponent’s checker is empty, then your checker must jump the opponent’s checker and land in the space beyond. Your opponent’s checker is captured and removed from the board.
* After making one jump, your checker might have another jump available from its new position. Your checker must take that jump too. It must continue to jump until there are no more jumps available. Both pieces and kings are forced to make multiple jumps when it is possible.
* If, at the start of a turn, more than one of your checkers has a jump available, then you may decide which one you will move. But once you have chosen one, it must take all the jumps that it can.

#### Crowing a piece to King:
* When one of your checkers reaches the opposite side of the board, it is crowned and becomes a King. Your turn ends there.
* A King can move backward as well as forward along the diagonals. It can only move a distance of one space.
* A King can also jump backward and forward. It must jump when possible, and it must take all jumps that are available to it. In each jump, the King can only jump over one opposing piece at a time, and it must land in the space just beyond the captured piece. The King can not move multiple spaces before or after jumping a piece.
