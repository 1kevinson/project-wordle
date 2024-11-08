export function checkGuess(guess, answer) {
    const guessLetters = guess.toUpperCase().split('');
    const answerLetters = answer.toUpperCase().split('');
    const results = [];

    const guessStatus = (index, status) => {
        return {letter: guessLetters[index], status: status};
    }

    for (let index = 0; index < answerLetters.length; index++) {
        if (!answerLetters.includes(guessLetters[index])) {
            results.push(guessStatus(index, 'incorrect'));
            continue;
        }

        results.push(guessLetters[index] === answerLetters[index]
            ? guessStatus(index, 'correct')
            : guessStatus(index, 'misplaced')
        )
    }

    return results;
}
