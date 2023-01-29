import readlineSync from 'readline-sync';
import welcome from './cli.js';

const startGame = (rules, questionAndAnswer) => {
  const name = welcome();
  const numberRound = 3;
  console.log(rules);
  for (let i = 0; i < numberRound; i += 1) {
    const questionAnswer = questionAndAnswer;
    console.log(`Question: ${questionAnswer[i][0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === questionAnswer[i][1]) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${questionAnswer[i][1]}. Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
