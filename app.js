//Using any of the tools you've worked with so far, create a game of Tic-Tac-Toe.

//* Create a Tic-Tac-Toe game grid using your HTML element of choice.
//* When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.
//* A heading should say whether it is X's or O's turn and change with each move made.
//* A button should be available to clear the grid and restart the game.
//* When a player has won, or the board is full and the game results in a draw, 
//* a Bootstrap alert or similar Bootstrap component should appear across the screen announcing the winner.

//!-----------------------------------//

// Wrap entire code in jQuery's document ready function to ensure DOM is loaded before jQuery runs
$(function () {

  // Cache box elements so we can access them easily later
  let box0 = $('#box0');
  let box1 = $('#box1');
  let box2 = $('#box2');
  let box3 = $('#box3');
  let box4 = $('#box4');
  let box5 = $('#box5');
  let box6 = $('#box6');
  let box7 = $('#box7');
  let box8 = $('#box8');

  let player1 = "X";
  let player2 = "O";

  let turn = 0;
  let winner = false;

  // Hide all alert messages at the start
  $('#alertStart').hide();
  $('#alertWinner').hide();
  $('#alertDraw').hide();

  // Define all possible winning combinations
  const winningOutcomes = [
    [box0, box1, box2], [box3, box4, box5], [box6, box7, box8],
    [box0, box3, box6], [box1, box4, box7], [box2, box5, box8],
    [box0, box4, box8], [box2, box4, box6]
  ];

  // Keep track of the current player
  let currentPlayer = '';

  // Start game function sets initial state and binds click events
  const startGame = () => {
    console.log("Start Game!");
    currentPlayer = player1;

    // Show the start alert
    $('#alertStart').text("Player 1 Start!").show();

    // Highlight Player 1's turn
    $('#p1').addClass("bg-light border border-info");

    // When a box is clicked
    $('.box').on('click', function () {
      // Prevent playing in a filled box or after a winner is found
      if ($(this).text() !== '' || winner) return;

      // Hide the start alert after the first move
      $('#alertStart').hide();

      // Mark the current box with the player's symbol
      $(this).text(currentPlayer);
      turn++;

      // After at least 5 moves, check for a winner
      if (turn >= 5) {
        checkWinner();
      }

      // If no winner, switch players and update highlights
      if (!winner) {
        if (currentPlayer === player1) {
          currentPlayer = player2;
          $('#p2').addClass("bg-light border border-info");
          $('#p1').removeClass("bg-light border border-info");
        } else {
          currentPlayer = player1;
          $('#p1').addClass("bg-light border border-info");
          $('#p2').removeClass("bg-light border border-info");
        }
      }
    });
  };

  // Check if the current board has a winning combination
  const checkWinner = () => {
    for (let combo of winningOutcomes) {
      const [a, b, c] = combo;

      // If all three boxes have the same non-empty value, declare winner
      if (a.text() !== '' && a.text() === b.text() && b.text() === c.text()) {
        winner = true;

        // Display the winner alert
        $('#alertWinner').text(`Player ${a.text()} Wins!`).show();

        // Remove player highlights
        $('#p1, #p2').removeClass("bg-light border border-info");
        return;
      }
    }

    // If all boxes are filled and no winner, declare draw
    if (turn === 9 && !winner) {
      $('#alertDraw').show();
      $('#p1, #p2').removeClass("bg-light border border-info");
    }
  };

  // Bind start game function to the Start button
  $('#startBtn').on('click', startGame);

  //  reset functionality to reload the page when Reset button is clicked
 $('#resetBtn').on('click', () => {
  // Clear all box content
  $('.box').text('');

  // Hide any alerts
  $('#alertStart').hide();
  $('#alertWinner').hide();
  $('#alertDraw').hide();

  // Remove player highlights
  $('#p1, #p2').removeClass("bg-light border border-info");

  // Reset game variables
  turn = 0;
  winner = false;
  currentPlayer = '';

  // Remove box click handlers until the game is restarted
  $('.box').off('click');
});

});
