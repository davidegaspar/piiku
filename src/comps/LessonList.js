import React, { Component } from 'react';
import LessonListItem from './LessonListItem';

class LessonList extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className = "LessonList">
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
