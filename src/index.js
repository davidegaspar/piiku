import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import red01 from './red01.json';

ReactDOM.render(
  <App
    lessonList = {[red01]}
  />,
  document.getElementById('root')
);
