import React, { Component } from 'react';

import Utils from '../utils/Utils';

import SwipeCard from './SwipeCard';

class Lesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardIndex: Utils.getRandomIndexFromWeightedList(this.props.lesson.cards)
    };
    this.handleCardUpdate = this.handleCardUpdate.bind(this);
  }
  handleCardUpdate(newCard){
    // update lesson
    let newLesson = Utils.cloneObject(this.props.lesson);
    newLesson.cards[this.state.cardIndex] = newCard;
    this.props.onLessonUpdate(newLesson);
    // select next card
    this.setState({
      cardIndex: Utils.getRandomIndexFromWeightedList(this.props.lesson.cards)
    });
  }
  render() {
    return (
      <div className = "Lesson">
        <div className = "LessonBack">
          <i className="fa fa-3x fa-chevron-left" onClick = {this.props.onBack} aria-hidden="true"></i>
        </div>
        {this.props.lesson.name}
        {this.props.lesson.book}
        {this.props.lesson.cards.length}
        <SwipeCard
          card = {this.props.lesson.cards[this.state.cardIndex]}
          onCardUpdate = {this.handleCardUpdate}
        />
      </div>
    );
  }
}

export default Lesson;
