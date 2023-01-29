import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import welcome from '../cli.js';

const numberRound = 3;
const operators = ['+', '-', '*'];

const defineCorrectAnswer = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return 0;
  }
};

const playGameCalc = (name) => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < numberRound; i += 1) {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const question = `${firstNumber} ${operators[i]} ${secondNumber}`;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = String(defineCorrectAnswer(firstNumber, secondNumber, operators[i]));
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const startGameCalc = () => {
  const name = welcome();
  playGameCalc(name);
};

export default startGameCalc;
