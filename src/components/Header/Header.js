import React from 'react';
import { RotateCcw } from "lucide-react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import FlagSelect from "../FlagSelect";

function Header(props) {

  function resetGame() {
    props.setGameStatus('running');
    props.setguesses([]);
    props.setResultData([]);
    props.setWordGuess('');
    props.setAnswer(sample(WORDS));
  }

  const restartGame = <span className='restart-game'>
    <RotateCcw
       strokeWidth={2.5}
       color="#cd3780"
       onClick={() => resetGame()}
    />
  </span>

  return (
    <header>
      <FlagSelect/>
      <h1 className='title'>Words</h1>
      {props.gameStatus !== 'running' && restartGame}
    </header>
  );
}

export default Header;
