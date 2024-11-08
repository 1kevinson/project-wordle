/**
 * Thanks to GitHub user dylano for supplying a more-accurate
 * solving algorithm!
 */

export function checkGuess(guess, answer) {
    const guessLetters = guess.toUpperCase().split('');
    const answerLetters = answer.toUpperCase().split('');
    const results = [];

    for (let index = 0; index < answerLetters.length; index++) {
        if(!answerLetters.includes(guessLetters[index])) {
            results.push({letter: guessLetters[index], status: 'incorrect'});
            continue;
        }

        results.push(
            guessLetters[index] === answerLetters[index] ?
                {letter: guessLetters[index], status: 'correct'} :
                {letter: guessLetters[index], status: 'misplaced'}
        )
    }

    return results;
}
