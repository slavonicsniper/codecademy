let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (guess, target) => Math.abs(guess - target);

const compareGuesses = (human, computer, target) => getAbsoluteDistance(computer, target) >= getAbsoluteDistance(human, target);

const updateScore = winner => winner === 'human' ? humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;