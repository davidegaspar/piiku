import React, { Component } from 'react';

import './LessonList.css';

import LessonListItem from './LessonListItem';

class LessonList extends Component {
  render() {
    return (
      <div className = "LessonList">
        <div className = "TitleBar">
          <div className = "Title">
            ピーク
          </div>
          <div className = "Action Left" onClick = {this.props.onLeft}>
            <i className="fa fa-question-circle"></i>
          </div>
        </div>
        <div className = "Content">
          {this.props.list.map((item, index) =>
            <LessonListItem
              key = {index}
              lesson = {item}
              onSelect = {() => {this.props.onSelect(index)}}
            />
          )}
        </div>
      </div>
    );
  }
}

export default LessonList;
