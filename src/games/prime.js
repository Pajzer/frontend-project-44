import randomNumber from '../random.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minNum = 0;
const maxNum = 100;

// Является ли число простым
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameRound = () => {
  // Вопрос, на который нужно дать ответ
  const question = randomNumber(minNum, maxNum);
  // Правильный ответ
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { correctAnswer, question };
};

export default () => runGame(description, gameRound);
