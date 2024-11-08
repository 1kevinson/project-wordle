import React from 'react';

function WordInput(props) {

    function proposeWordGuess(event) {
        event.preventDefault();

        const proposedWords = [...props.guesses, props.wordGuess];
        event.target.checkValidity() && props.setGuesses(proposedWords);
        props.setWordGuess('');
    }

    return (
        <form className="guess-input-wrapper"
              onSubmit={proposeWordGuess}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input"
                   type="text"
                   pattern=".{5}"
                   maxLength={5}
                   title="Please enter exactly 5 non-space characters."
                   value={props.wordGuess}
                   onChange={event => {
                       props.setWordGuess(event.target.value.toUpperCase());
                   }}
                   required={true}
            />
        </form>
    )
}

export default WordInput;
