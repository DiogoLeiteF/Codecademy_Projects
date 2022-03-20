//função para escolha do utilizador
let getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock') {
    return userInput;
  } else if (userInput === 'paper') {
    return userInput;
  } else if (userInput === 'scissors') {
    return userInput;
  } else if (userInput === 'bomb') {
    return userInput
  } else {
    console.log('wrong input, try rock, paper or scissors');
  }
};
//console.log(getUserChoice('paper'));

// funcão para a escolha do computador
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  };
};
//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {

  if (userChoice === computerChoice) {
    return 'the game is a tie'
  };
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won!';
    } else {
      return 'user won';
    };
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won'
    } else {
      return 'user won'
    };
  };
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'computer won'
    } else {
      return 'user won'
    }
  }
  if (userChoice === 'bomb') {
    return 'User destroyed everything with a f bomb!'
  }
}

/* teste a função determineWinner()
console.log(getUserChoice('paper'));
console.log(getComputerChoice());
console.log(determineWinner('paper', 'rock'));
console.log(determineWinner('rock', 'paper'));
console.log(determineWinner('scissors', 'rock'));
console.log(determineWinner('paper', 'paper'));*/

const playGame = () => {
  let userChoice = getUserChoice("bomb");
  let computerChoice = getComputerChoice();
  console.log('user choice: ' + userChoice);
  console.log('computer choice: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();