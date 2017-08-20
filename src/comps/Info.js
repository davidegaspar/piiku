import React, { Component } from 'react';

import './Info.css';

import Utils from '../utils/Utils';

class Info extends Component {
  render() {
    return (
      <div className = "Info">
        <div className = "TitleBar">
          <div className = "Title">
            Info
          </div>
          <div className = "Action Right" onClick = {this.props.onBack}>
            <i className="fa fa-caret-right"></i>
          </div>
        </div>
        <div className = "Content">
          <p>
            <a href="mailto:jap@davidegaspar.com">jap@davidegaspar.com</a>
          </p>
          <p>
            <button onClick = {Utils.deleteLessons}>Reset Lessons</button>
          </p>
        </div>
      </div>
    );
  }
}

export default Info;
