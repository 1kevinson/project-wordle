import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every page load.
const answer = sample(WORDS);
console.info(answer);

function Game() {

    const [gameStatus, setGameStatus] = React.useState('running');
    const [wordGuess, setWordGuess] = React.useState('');
    const [guesses, setGuesses] = React.useState([]);

    return (
        <React.Fragment>
            <Guesses guesses={guesses}
                     answer={answer}
                     wordGuess={wordGuess}
            />
            <GuessInput
                answer={answer}
                guesses={guesses}
                setGuesses={setGuesses}
                wordGuess={wordGuess}
                setWordGuess={setWordGuess}
                gameStatus={gameStatus}
                setGameStatus={setGameStatus}
            />
            {gameStatus === 'won' && <WonBanner numberOfGuesses={guesses.length}/>}
            {gameStatus === 'lost' && <LostBanner answer={answer}/>}
        </React.Fragment>
    );
}

export default Game;
