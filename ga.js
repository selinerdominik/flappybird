// Daniel Shiffman
// Nature of Code: Intelligence and Learning
// https://github.com/shiffman/NOC-S17-2-Intelligence-Learning

// This flappy bird implementation is adapted from:
// https://youtu.be/cXgA1d_E-jY&


// This file includes functions for creating a new generation
// of birds.

// Start the game over
function resetGame() {
  counter = 0;
  // Resetting best bird score to 0
  bird = new Bird();
  pipes = [];
}
