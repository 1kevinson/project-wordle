import React from 'react';
import { range } from "../../utils";
import { NUM_OF_WORD_LENGTH } from "../../constants";

function Guess({ guessWord }) {
  return <p className="guess">
    {range(0, NUM_OF_WORD_LENGTH).map((number, index) => (
       <span className="cell" key={index}>
         {guessWord !== undefined && guessWord.split('')[index]}
       </span>
    ))}
  </p>;
}

export default Guess;