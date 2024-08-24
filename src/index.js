import readlineSync from 'readline-sync';

const stepsCount = 3;

const runGame = (description, getRound) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${username}!`);
  console.log(description);
  for (let i = 0; i < stepsCount; i += 1) {
    const { correctAnswer, question } = getRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer.toLowerCase() !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }
  console.log('Correct!');
  console.log(`Congratulations, ${username}!`);
};

export default runGame;
