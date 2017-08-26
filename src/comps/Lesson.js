import React, { Component } from 'react';

import './Lesson.css';

import Utils from '../utils/Utils';

import SwipeCard from './SwipeCard';
import Rating from './Rating';

class Lesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardIndex: Utils.getRandomIndexFromWeightedList(this.props.lesson.cards)
    };
    this.handleCardUpdate = this.handleCardUpdate.bind(this);
  }
  handleCardUpdate(newCard){
    console.log(newCard);
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
        <div className = {'TitleBar ' + this.props.lesson.book}>
          <div className = "Title">
            Chapter {this.props.lesson.chapter}
          </div>
          <div className = "Action Left" onClick = {this.props.onBack}>
            <i className="fa fa-caret-left"></i>
          </div>
          <Rating
            cards = {this.props.lesson.cards}
          />
        </div>
        <div className = "Content">
          <SwipeCard
            card = {this.props.lesson.cards[this.state.cardIndex]}
            onCardUpdate = {this.handleCardUpdate}
          />
        </div>
      </div>
    );
  }
}

export default Lesson;
