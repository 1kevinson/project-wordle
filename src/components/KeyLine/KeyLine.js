import React from 'react';
import KeyCap from "../KeyCap";
import {range} from "../../utils";

function KeyLine(props) {
    const keyCaps = getKeyCaps(props.keyboardLine, props.keyCaps)

    return (
        <div className='key-line'>
            {range(keyCaps.length).map(index => {
                const keyCapUniqueKey = `${index}-${Math.random()}`;
                return (
                    <KeyCap key={keyCapUniqueKey}>
                        {keyCaps[index]}
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
