import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import WordInput from "../WordInput";
import Guesses from "../Guesses";
import toast, {Toaster} from "react-hot-toast";

// Pick a random word on every page load.
const answer = sample(WORDS);
console.info(answer);

function Game() {

    const [wordGuess, setWordGuess] = React.useState('');
    const [guesses, setGuesses] = React.useState([]);

    return (
        <React.Fragment>
            <Toaster/>
            <Guesses guesses={guesses}
                     answer={answer}
                     wordGuess={wordGuess}
            />
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
