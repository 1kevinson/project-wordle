import React from 'react';

function WordInput({ wordGuess, setWordGuess, guesses, setGuesses }) {

  function proposeWordGuess(event) {
    event.preventDefault();

    const proposedWords = [...guesses, wordGuess];
    console.log(proposedWords);

    event.target.checkValidity() && setGuesses(proposedWords);
    setWordGuess('');
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
              value={wordGuess}
              onChange={event => {
                setWordGuess(event.target.value.toUpperCase());
              }}
              required={true}
       />
     </form>
  )
}

export default WordInput;