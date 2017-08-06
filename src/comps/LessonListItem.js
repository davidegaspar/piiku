import React, { Component } from 'react';
import Rating from './Rating';
import './LessonListItem.css';

class LessonListItem extends Component {
  render() {
    // if (!this.props.show) {
    //   return null;
    // }
    // calculate rating from elements
    let weightTotal = this.props.lesson.cards.reduce( (accumulator, currentValue) => accumulator + parseInt(currentValue.weight, 10), 0);
    let progress = (weightTotal - (this.props.lesson.cards.length * 1)) / (this.props.lesson.cards.length * (8 - 1));
    let rating = Math.floor(5 - (progress * 5));
    return (
      <div className = "LessonListItem" onClick = {this.props.onSelect}>
        <div style={{backgroundColor: this.props.lesson.book}}>{this.props.lesson.book}</div>
        <div>{this.props.lesson.name}</div>
        <Rating
          value = {rating}
        />
      </div>
    );
  }
}

export default LessonListItem;
