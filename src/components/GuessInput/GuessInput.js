import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {checkGuess} from "../../game-helpers";

function GuessInput(props) {

    const resultGuess = props.wordGuess && checkGuess(props.wordGuess, props.answer);

    function proposeWordGuess(event) {
        event.preventDefault();

        const nextGuesses = [...props.guesses, props.wordGuess];
        const nextResultData = [...props.resultData, ...resultGuess];

        props.setResultData(nextResultData);
        props.setGuesses(nextGuesses);
        updateGameStatus(nextGuesses);
        props.setWordGuess('');
    }

    function updateGameStatus(nextGuesses) {
        if (props.wordGuess.toUpperCase() === props.answer) {
            props.setGameStatus('won');
        }

        if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED &&
            props.wordGuess.toUpperCase() !== props.answer) {
            props.setGameStatus('lost')
        }
    }

    return (
        <form className="guess-input-wrapper"
              onSubmit={proposeWordGuess}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input"
                   disabled={props.gameStatus !== 'running'}
                   type="text"
                   pattern="[a-zA-Z]{5}"
                   maxLength={5}
                   title="Please enter exactly 5 text characters."
                   value={props.wordGuess}
                   onChange={event => {
                       props.setWordGuess(event.target.value.toUpperCase());
                   }}
                   required={true}
            />
        </form>
    )
}

export default GuessInput;
