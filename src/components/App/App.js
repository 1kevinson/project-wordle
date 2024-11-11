import Game from '../Game';
import Header from '../Header';
import {StrictMode} from "react";

function App() {
    return (
        <div className="wrapper">
            <Header/>

            <div className="game-wrapper">
                <StrictMode>
                    <Game/>
                </StrictMode>
            </div>
        </div>
    );
}

export default App;
