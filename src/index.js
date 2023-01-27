import readlineSync from 'readline-sync';
import welcome from './cli.js';

const numberRound = 3;

const startGame = (rules, question, correctAnswer) => {
  const name = welcome();
  console.log(rules);
  for (let i = 0; i < numberRound; i += 1) {
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`);
      return;
    }
    console.log(`Congratulations, ${name}!`);
  }
};
export default startGame();
