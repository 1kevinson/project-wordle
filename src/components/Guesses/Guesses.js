import React from 'react';
import Guess from "../Guess";

function Guesses({ guesses }) {

  const uniqueGuesses = guesses.map((guess) => {
    return {
      word: guess,
      id: crypto.randomUUID()
    }
  });

  return (
     <div className="guess-results">
       {uniqueGuesses.map((guess) => (
          <Guess className="guess" key={guess.id}> {guess.word}</Guess>
       ))}
     </div>
  );
}

export default Guesses;
