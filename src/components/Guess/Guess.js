import React from 'react';
import { range } from "../../utils";
import { NUM_OF_WORD_LENGTH } from "../../constants";
import {checkGuess} from "../../game-helpers";

function Guess({ guessWord, answer }) {

  const results = guessWord !== undefined && checkGuess(guessWord, answer);

  return <p className="guess">
    {range(0, NUM_OF_WORD_LENGTH).map((number, index) => (
       <span className={`cell ${guessWord !== undefined && results[index].status}`} key={index}>
         {guessWord !== undefined && guessWord.split('')[index]}
       </span>
    ))}
  </p>;
}

export default Guess;