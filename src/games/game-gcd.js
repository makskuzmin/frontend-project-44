import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const getCommonDivisor = (num1, num2) => {
  let commonDivisor = num2;
  for (let i = commonDivisor; i > 0; i -= 1) {
    if (num1 % commonDivisor === 0 && num2 % commonDivisor === 0) {
      return commonDivisor;
    }
    commonDivisor -= 1;
  }
  return commonDivisor;
};

const getAnswer = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  if (num1 > num2) {
    return getCommonDivisor(num1, num2);
  }
  return getCommonDivisor(num2, num1);
};

const getQuestionAndAnswer = (roundCount) => {
  const questionAndAnswer = [];
  for (let i = 0; i < roundCount; i += 1) {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const question = `${firstNumber} ${secondNumber}`;
    const answer = String(getAnswer(firstNumber, secondNumber));
    questionAndAnswer.push([question, answer]);
  }
  return questionAndAnswer;
};

const startGameGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const roundCount = 3;
  const questionAndAnswer = getQuestionAndAnswer(roundCount);
  startGame(rules, questionAndAnswer);
};

export default startGameGcd;
