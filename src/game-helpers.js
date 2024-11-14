import { driver } from "driver.js";

export function checkGuess(guess, answer) {

  const guessLetters = guess.toUpperCase().split('');
  const answerLetters = answer.toUpperCase().split('');
  const results = [];

  const guessStatus = (index, status) => {
    return { letter: guessLetters[index], status: status };
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

export function gameDescription() {
  const driverObj = driver({
    showProgress: true,
    showButtons: ['next', 'previous','close'],
    steps: [
      { element: '.guess-input-wrapper', popover: { description: 'Try to guess the word by entering 5 letters word.' } },
      { element: '.guess', popover: { description: 'All your guesses will be displayed here' } },
      { element: '.key-line', popover: { description: 'All your previous letters guesses are printed on this virtual keyboard.' } },
    ]
  });

  driverObj.drive()
}
