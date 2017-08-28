import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import lessons from './test_lessons.js';

ReactDOM.render(
  <App
    lessonList = {lessons}
  />,
  document.getElementById('root')
);
