import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, mult) => {
  const result = [];
  const length = getRandomNumber(5, 10);

  for (let i = 0; i < length; i += 1) {
    result.push(start + i * mult);
  }
  return result;
};

const censor = (array) => {
  const randomIndex = getRandomNumber(0, array.length - 1);
  const hiddenValue = array[randomIndex];
  array[randomIndex] = '..';
  return { censoredArray: array, hiddenValue };
};

const getRound = () => {
  const startNum = getRandomNumber(1, 20);
  const startMultiple = getRandomNumber(2, 5);
  const progression = getProgression(startNum, startMultiple);
  const { censoredArray, hiddenValue } = censor(progression);
  const question = censoredArray.join(' ');
  const correctAnswer = hiddenValue.toString();

  return { correctAnswer, question };
};

export default () => runGame(description, getRound);
