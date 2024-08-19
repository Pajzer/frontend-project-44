import randomNumber from '../random.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const minNum = 0;
const maxNum = 50;


const calc = (x, y, operator) => {
    switch (operator) {
        case '+':
            return x + y
        case '-':
            return x - y  
        case '*':
            return x * y
        default:
            break;    
    }
};


const evenNumber = () => {
    const num1 = randomNumber(minNum, maxNum);
    const num2 = randomNumber(minNum, maxNum);
    const operatorIndex = Math.floor(Math.random() * operators.length)
    const operator = operators[operatorIndex]
    const question = `${num1} ${operator} ${num2}`
    const correctAnswer = calc(num1, num2, operator).toString();
    return {correctAnswer, question}
};

export default () => runGame(description, evenNumber);