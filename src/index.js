import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import red01 from './red01.json';
import red02 from './red02.json';
import red03 from './red03.json';

ReactDOM.render(
  <App
    lessonList = {[red01, red02, red03]}
  />,
  document.getElementById('root')
);
