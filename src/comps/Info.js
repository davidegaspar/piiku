import React, { Component } from 'react';

import Utils from '../utils/Utils';

class Info extends Component {
  render() {
    return (
      <div className = "Info">
        <div className = "InfoBack">
          <div>Info</div>
          <i className="fa fa-3x fa-chevron-right" onClick = {this.props.onBack} aria-hidden="true"></i>
        </div>
        <div>
          some text and contacts
        </div>
        <button onClick = {Utils.deleteLessons}>Reset Lessons</button>
      </div>
    );
  }
}

export default Info;
