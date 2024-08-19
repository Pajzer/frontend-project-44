import randomNumber from '../random.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenNumber = () => {
  const question = randomNumber()
  const isEven = question % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no'
  return {correctAnswer, question}
};

export default () => runGame(description, evenNumber);
