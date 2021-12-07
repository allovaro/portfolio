import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WebFont from 'webfontloader';
import App from './components/app/app';

import 'semantic-ui-css/semantic.min.css';

WebFont.load({
    google: {
        families: ['Titillium Web:300,400,700', 'sans-serif'],
    },
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
