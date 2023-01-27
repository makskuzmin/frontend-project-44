import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandomNumber.js';
import welcome from '../cli.js';

const numberRound = 3;

const playGameEven = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < numberRound; i += 1) {
    const question = getRandomNumber();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer 'yes' or 'no'. Let's try again, ${name}!`);
      return;
    }
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const startGameEven = () => {
  const name = welcome();
  playGameEven(name);
};

export default startGameEven;
