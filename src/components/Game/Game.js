import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import WordInput from "../WordInput";
import Guesses from "../Guesses";

// Pick a random word on every page load.
const answer = sample(WORDS);
console.info( answer );

function Game() {

  const [wordGuess, setWordGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);

  return (
     <React.Fragment>
       <Guesses guesses={guesses} answer={answer} />
       <WordInput
          guesses={guesses}
          setGuesses={setGuesses}
          wordGuess={wordGuess}
          setWordGuess={setWordGuess}
       />
     </React.Fragment>
  );
}

export default Game;
