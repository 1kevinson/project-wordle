import React from 'react';

import {range, sample} from '../../utils';
import {WORDS} from '../../data';
import {ALPHABET} from '../../data-keyboard';
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import KeyLine from "../KeyLine";

const keyboardLayers = [10, 9, 7];
const keyCaps = ALPHABET;
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
            {range(3).map((number) => (
                <KeyLine
                    className='keyLine'
                    key={number}
                    keyboardLine={number + 1}
                    numOfKeycaps={keyboardLayers[number]}
                    keyCaps={keyCaps}
                />
            ))}
            {gameStatus === 'won' && <WonBanner numberOfGuesses={guesses.length}/>}
            {gameStatus === 'lost' && <LostBanner answer={answer}/>}
        </React.Fragment>
    );
}

export default Game;
