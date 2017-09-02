import React, { Component } from 'react';

import './LessonListItem.css';

import Rating from './Rating';

class LessonListItem extends Component {
  render() {
    let bookColors = ['Black', 'Red', 'Blue'];
    return (
      <div className = {'LessonListItem ' + bookColors[this.props.lesson.book]} onClick = {this.props.onSelect}>
        <div className = "Lesson">Lesson {this.props.lesson.lesson}</div>
        <Rating
          cards = {this.props.lesson.cards}
        />
      </div>
    );
  }
}

export default LessonListItem;
