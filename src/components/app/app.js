import React from 'react';
import './app.css';
import logo from '../../logo.png';

const App = function () {
    return (
        <div className="App">
            <img src={logo} alt="Logo" />
            <header className="App-header">
                Hello world
            </header>
        </div>
    );
};

export default App;
