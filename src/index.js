import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import cards from './cards.js';

ReactDOM.render(<App rawCards={cards}/>, document.getElementById('root'));
registerServiceWorker();
