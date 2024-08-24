import getRandomNumber from '../getRandomNumber.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Operator ${operator} - is incorrect!`);
  }
};

const getRound = () => {
  const number1 = getRandomNumber(0, 50);
  const number2 = getRandomNumber(0, 50);
  const operatorIndex = getRandomNumber(0, operators.length -1);
  const operator = operators[operatorIndex];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator).toString();
  return { correctAnswer, question };
};

export default () => runGame(description, getRound);
