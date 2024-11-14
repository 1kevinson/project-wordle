import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import { ALPHABET } from '../../data-keyboard';
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import KeyLine from "../KeyLine";
import "driver.js/dist/driver.css"
import { gameDescription } from "../../game-helpers";

const keyboardLayers = [10, 9, 7];
const keyCaps = ALPHABET;

function Game({ gameStatus, setGameStatus, guesses,
                setGuesses, resultData, setResultData,
                wordGuess, setWordGuess, answer }) {

  React.useEffect(() => {
    gameDescription();
  }, [])

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
          setResultData={setResultData}
          resultData={resultData}
       />
       {range(3).map((number) => (
          <KeyLine
             key={number}
             keyboardLine={number + 1}
             numOfKeycaps={keyboardLayers[number]}
             keyCaps={keyCaps}
             resultData={resultData}
          />
       ))}
       {gameStatus === 'won' && <WonBanner numberOfGuesses={guesses.length}/>}
       {gameStatus === 'lost' && <LostBanner answer={answer}/>}
     </React.Fragment>
  );
}

export default Game;
