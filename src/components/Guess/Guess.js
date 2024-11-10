import React from 'react';
import {range} from "../../utils";
import {NUM_OF_WORD_LENGTH} from "../../constants";
import {checkGuess} from "../../game-helpers";

function Guess({guessWord, answer}) {

    const results = guessWord && checkGuess(guessWord, answer);

    return <p className="guess">
        {range(NUM_OF_WORD_LENGTH).map((number) => (
            <Cell key={number}
                  letter={results && results[number].letter}
                  status={results && results[number].status}
            />
        ))}
    </p>;
}

function Cell({letter, status}) {
    const className = status ? `cell ${status}` : 'cell';
    return (
        <span className={className}>{letter}</span>
    )
}

export default Guess;