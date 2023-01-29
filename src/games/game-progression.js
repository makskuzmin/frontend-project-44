import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const randomRange = (min, max) => Math.round(Math.random() * (max - min) + min);

const getProgression = (firstNumber, indexRange, stepRange) => {
  const progression = [firstNumber];
  for (let i = 1; i < indexRange; i += 1) {
    progression.push(firstNumber + stepRange * i);
  }
  return progression;
};

const getQuestionAndAnswer = (roundCount) => {
  const questionAndAnswer = [];
  const firstIndexRange = 5;
  const lastIndexRange = 10;

  for (let i = 0; i < roundCount; i += 1) {
    const firstNumber = getRandomNumber();
    const range = randomRange(firstIndexRange, lastIndexRange);
    const stepRange = getRandomNumber();
    const progression = getProgression(firstNumber, range, stepRange);
    const indexRange = randomRange(0, range);
    const answer = String(progression[indexRange]);
    progression[indexRange] = '..';
    const question = progression.join(' ');
    questionAndAnswer.push([question, answer]);
  }
  return questionAndAnswer;
};

const startGameProgression = () => {
  const rules = 'What number is missing in the progression?';
  const roundCount = 3;
  const questionAndAnswer = getQuestionAndAnswer(roundCount);
  startGame(rules, questionAndAnswer);
};

export default startGameProgression;
