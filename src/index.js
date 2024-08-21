import readlineSync from 'readline-sync';

// Максимальное количество раундов
const stepsCount = 3;

const runGame = (description, gameRound) => {
	console.log('Welcome to the Brain Games!');
	const name = readlineSync.question('May I have your name?: ');
	console.log(`Hello, ${name}!`);
	// Описание правил игры
	// У каждой игры оно свое
    console.log(description);

	for (let i = 0; i < stepsCount; i ++) {
        const {correctAnswer, question } = gameRound();

		console.log(`Question: ${question}`);
		const answer = readlineSync.question('Your answer: ');
		
		// Сверяет ответ пользователя с правильным ответом
		if (answer.toLowerCase() === correctAnswer) {
			console.log('Correct!');
		} else {
			console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
			console.log(`Let's try again, ${name}`);
			return
		}
	}	
	console.log(`Congratulations, ${name}!`);
};

export default runGame;
