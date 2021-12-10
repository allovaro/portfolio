import React from 'react';
import './app.css';
import {
    Routes, Route,
} from 'react-router-dom';
import Home from '../pages/home';
import DexProject from '../pages/dexProject';
import GameProject from '../pages/gameProject';
import ICOProject from '../pages/icoProject';
import MarketplaceProject from '../pages/marketplaceProject';
import TodoProject from '../pages/todoProject';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/dex" element={<DexProject />} />
                <Route exact path="/nftgame" element={<GameProject />} />
                <Route exact path="/ico" element={<ICOProject />} />
                <Route exact path="/marketplace" element={<MarketplaceProject />} />
                <Route exact path="/todo" element={<TodoProject />} />
            </Routes>
        </div>
    );
}

export default App;
