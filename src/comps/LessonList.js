import React, { Component } from 'react';

import LessonListItem from './LessonListItem';

class LessonList extends Component {
  render() {
    return (
      <div className = "LessonList">
        <div className = "LessonListLeft">
          <i className="fa fa-3x fa-info-circle" onClick = {this.props.onLeft} aria-hidden="true"></i>
          <div>ピーク</div>
        </div>
        {this.props.list.map((item, index) =>
          <LessonListItem
            key = {index}
            lesson = {item}
            onSelect = {() => {this.props.onSelect(index)}}
          />
        )}
      </div>
    );
  }
}

export default LessonList;
