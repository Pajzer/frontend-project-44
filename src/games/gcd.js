import randomNumber from '../random.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const minNum = 0;
const maxNum = 100;

const gcd = (a, b) => {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};


const gameRound = () => {
    const num1 = randomNumber(minNum, maxNum);
    const num2 = randomNumber(minNum, maxNum);
    const question = `${num1} ${num2}`;
    const correctAnswer = gcd(num1, num2).toString();
    return {correctAnswer, question}
};

export default () => runGame(description, gameRound);