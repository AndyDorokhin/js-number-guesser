let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, secretTarget) {
  return Math.abs(humanGuess - secretTarget) <= Math.abs(computerGuess - secretTarget);
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}
