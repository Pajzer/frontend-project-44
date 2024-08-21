import randomNumber from '../random.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const minNum = 0;
const maxNum = 100;

const gameRound = () => {
  // Вопрос, на который нужно дать ответ
  const question = randomNumber(minNum, maxNum);
  const isEven = question % 2 === 0;
  // Правильный ответ
  const correctAnswer = isEven ? 'yes' : 'no';
  return { correctAnswer, question };
};

export default () => runGame(description, gameRound);
