import randomNumber from '../random.js';
import runGame from '../index.js';


const evenNumber = () => {
  const random = randomNumber()
  const isEven = random % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no'
  return {correctAnswer, random}
};

export default () => runGame(evenNumber);
