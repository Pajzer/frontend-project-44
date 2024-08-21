import randomNumber from '../random.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const minNum = 1;
const maxNum = 20;
const minMultiply = 2;
const maxMultiply = 5;

// Формирует ряд чисел со случайной длинной
const arifmeticalProgression = (start, mult) => {
  const result = [];
  const length = randomNumber(5, 10);

  for (let i = 0; i < length; i += 1) {
    result.push(start + i * mult);
  }
  return result;
};

// Прячет случайное число в массиве за двоеточием
const censore = (array) => {
  const result = [...array];
  const randomIndex = randomNumber(0, array.length - 1);
  const hiddenIndex = result[randomIndex];
  result[randomIndex] = '..';
  return [result, hiddenIndex];
};

const gameRound = () => {
  const startNum = randomNumber(minNum, maxNum);
  const startMultiple = randomNumber(minMultiply, maxMultiply);
  // Формирует ряд чисел со случайной длиной
  const progression = arifmeticalProgression(startNum, startMultiple);
  const [result, hiddenIndex] = censore(progression);
  // Вопрос, на который нужно дать ответ
  const question = result.join(' ');
  // Правильный ответ
  const correctAnswer = hiddenIndex.toString();

  return { correctAnswer, question };
};

export default () => runGame(description, gameRound);
