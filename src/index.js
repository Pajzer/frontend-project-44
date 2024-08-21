import readlineSync from 'readline-sync';

const stepsCount = 3;

const runGame = (description, gameRound) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${username}!`);
  // Описание правил игры
  console.log(description);
  for (let i = 0; i < stepsCount; i += 1) {
    const { correctAnswer, question } = gameRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    // Сверяет ответ пользователя с правильным ответом
    if (answer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }	
  console.log(`Congratulations, ${username}!`);
};

export default runGame;
