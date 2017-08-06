import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';
import cards from './cards.js';
import lessons from './lessons.js';

ReactDOM.render(
  <App
    rawCards={cards}
    lessons = {lessons}
  />,
  document.getElementById('root')
);
// registerServiceWorker();
