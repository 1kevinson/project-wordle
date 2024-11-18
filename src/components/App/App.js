import Game from '../Game';
import Header from '../Header';
import React, { StrictMode } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";

function App() {

  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);
  const [resultData, setResultData] = React.useState([]);
  const [wordGuess, setWordGuess] = React.useState('');
  const [answer, setAnswer] = React.useState(() => {
    return sample(WORDS);
  });

  return (
     <div className="wrapper">
       <Header
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
          guesses={guesses}
          setguesses={setGuesses}
          resultData={resultData}
          setResultData={setResultData}
          wordGuess={wordGuess}
          setWordGuess={setWordGuess}
          setAnswer={setAnswer}
       />

       <div className="game-wrapper">
         <StrictMode>
           <Game
              gameStatus={gameStatus}
              setGameStatus={setGameStatus}
              guesses={guesses}
              setGuesses={setGuesses}
              resultData={resultData}
              setResultData={setResultData}
              wordGuess={wordGuess}
              setWordGuess={setWordGuess}
              answer={answer}
           />
         </StrictMode>
         <div className="signature">
           <span>Made with ♥️ by <a href="https://www.linkedin.com/in/kevin-kouomeu/" target='_blank'>Kevin Kouomeu</a></span>
         </div>
       </div>
     </div>
  );
}

export default App;
