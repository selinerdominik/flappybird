// Daniel Shiffman
// Nature of Code: Intelligence and Learning
// https://github.com/shiffman/NOC-S17-2-Intelligence-Learning

// This flappy bird implementation is adapted from:
// https://youtu.be/cXgA1d_E-jY&

// Mutation function to be passed into bird.brain

class Bird {
  constructor() {
    // position and size of bird
    this.x = 64;
    this.y = height / 2;
    this.r = 12;

    // Gravity, lift and velocity
    this.gravity = 0.4;
    this.lift = -6;
    this.velocity = 0;

    // Score is how many frames it's been alive
    this.score = 0;
  }

  // Display the bird
  show() {
    fill(133);
    stroke(255);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  // Jump up
  up() {
    this.velocity += this.lift;
  }

  bottomTop() {
    // Bird dies when hits bottom?
    return (this.y > height || this.y < 0);
  }

  // Update bird's position based on velocity, gravity, etc.
  update() {
    this.velocity += this.gravity;
    // this.velocity *= 0.9;
    this.y += this.velocity;

    // Every frame it is alive increases the score
    this.score++;
  }
}
