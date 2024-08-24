import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  let tempA = a;
  let tempB = b;
  while (tempB !== 0) {
    const temp = tempB;
    tempB = tempA % tempB;
    tempA = temp;
  }
  return tempA;
};

const getRound = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2).toString();
  return { correctAnswer, question };
};

export default () => runGame(description, getRound);
