import React from 'react';
import KeyCap from "../KeyCap";
import { range } from "../../utils";
import keyCap from "../KeyCap";

function KeyLine(props) {
  const keyCaps = getKeyCaps(props.keyboardLine, props.keyCaps)
     .map(keyCap => {
       const nextKeyCap = { key: keyCap, style: undefined }
       const resultMatches = props.resultData.filter(data => data.letter === keyCap);

       if (resultMatches.some(result => result.status === 'correct')) {
         nextKeyCap.style = 'correct'
       } else {
         nextKeyCap.style = resultMatches.length > 0 && resultMatches[0].status;
       }

       return nextKeyCap;
     });

  return (
     <div className='key-line'>
       {range(keyCaps.length).map(index => {
         const keyCapUniqueKey = `${index}-${Math.random()}`;

         return (
            <KeyCap key={keyCapUniqueKey} style={keyCaps[index].style}>
              {keyCaps[index].key}
            </KeyCap>
         );
       })}
     </div>
  );
}

function getKeyCaps(keyboardLine, keyCaps) {
  switch (keyboardLine) {
    case 1:
      return keyCaps.slice(0, 10);
    case 2:
      return keyCaps.slice(10, 19);
    default:
      return keyCaps.slice(19, 26);
  }
}

export default KeyLine;
