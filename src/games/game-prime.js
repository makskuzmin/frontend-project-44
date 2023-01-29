import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const getAnswer = (num) => {
  if (num === 0 || num === 1) {
    return false;
  }
  for (let i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = (roundCount) => {
  const questionAndAnswer = [];
  for (let i = 0; i < roundCount; i += 1) {
    const question = getRandomNumber();
    const answer = String(getAnswer(question) ? 'yes' : 'no');
    questionAndAnswer.push([question, answer]);
  }
  return questionAndAnswer;
};

const startGamePrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const roundCount = 3;
  const questionAndAnswer = getQuestionAndAnswer(roundCount);
  startGame(rules, questionAndAnswer);
};

export default startGamePrime;
