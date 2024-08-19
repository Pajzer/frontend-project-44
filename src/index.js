import readlineSync from 'readline-sync';

const stepsCount = 3;

const runGame = (evenNumber) => {
	console.log('Welcome to the Brain Games!');
	const name = readlineSync.question('May I have your name?: ');
	console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

	for (let i = 0; i < stepsCount; i ++) {
        const {correctAnswer, random } = evenNumber();

		console.log(`Question: ${random}`);
		const answer = readlineSync.question('Your answer: ');
		
		if (answer.toLowerCase() === correctAnswer) {
			console.log('Correct!');
		} else {
			console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
			console.log(`Let's try again, ${name}`);
			return
		}
	}	
	console.log(`Congratulations, ${name}`);
};

export default runGame;
