import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function GuessInput(props) {

    function proposeWordGuess(event) {
        event.preventDefault();

        const nextGuesses = [...props.guesses, props.wordGuess];
        props.setGuesses(nextGuesses);
        updateGameStatus(nextGuesses);
        props.setWordGuess('');
    }

    function updateGameStatus(nextGuesses) {
        if (props.wordGuess.toUpperCase() === props.answer) {
            props.setGameStatus('win');
        }

        if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
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
